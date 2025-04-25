import httpStatus from 'http-status'
import mongoose from 'mongoose'
import Bicycle from '../bicycle/bicycle.model'
import User from '../user/user.model'
import Order from './order.model'
import { orderUtils } from './order.utils'
import AppError from '../../errors/appError'

const createOrder = async (
  user: { _id: string; name: string; email: string },
  payload: {
    bicycles: {
      bicycle: string
      name: string
      quantity: number
      brand: string
    }[]
    deliveryType: 'standard' | 'express'
  },
  client_ip: string,
) => {
  const session = await mongoose.startSession()
  session.startTransaction()

  try {
    let totalPrice = 0
    const orderedItems: any[] = []

    for (const { bicycle, quantity } of payload.bicycles) {
      const bicycleInfo = await Bicycle.findById(bicycle).session(session)
      if (!bicycleInfo) throw new Error('Product not found')
      if (bicycleInfo.quantity < quantity)
        throw new Error('Not enough stock available')

      const updatedProduct = await Bicycle.findOneAndUpdate(
        { _id: bicycle, quantity: { $gte: quantity } },
        { $inc: { quantity: -quantity } },
        { new: true, session },
      )

      if (!updatedProduct) throw new Error('Stock update failed')

      totalPrice += Number(quantity * bicycleInfo.price)

      orderedItems.push({
        bicycle: bicycleInfo._id,
        name: bicycleInfo.name,
        quantity,
        brand: bicycleInfo.brand,
      })
    }

    // Add delivery charge once
    const deliveryCharge = payload.deliveryType === 'express' ? 6 : 3
    totalPrice += deliveryCharge
    totalPrice = parseFloat(totalPrice.toFixed(2))

    // Find user
    const currentUser = await User.findOne({ email: user.email }).session(
      session,
    )
    const buyer = currentUser?._id?.toString()
    if (!buyer) throw new Error('User not found')

    // Create order
    const [order] = await Order.create(
      [
        {
          user: {
            _id: currentUser?._id,
            name: currentUser?.name,
            email: currentUser?.email,
          },
          bicycles: orderedItems,
          totalPrice,
          deliveryType: payload.deliveryType,
          clientIP: client_ip,
        },
      ],
      { session },
    )

    // ShurjoPay Payment Integration
    const shurjopayPayload = {
      amount: totalPrice,
      order_id: order._id,
      currency: 'BDT',
      customer_name: currentUser?.name,
      customer_email: currentUser?.email,
      customer_address: 'Dhaka',
      customer_city: 'Dhaka',
      customer_phone: '01700000000',
      customer_post_code: '1212',
      client_ip,
    }

    const payment = await orderUtils.makePaymentAsync(shurjopayPayload)

    if (payment?.transactionStatus) {
      await Order.findByIdAndUpdate(
        order._id,
        {
          transaction: {
            id: payment.sp_order_id,
            transactionStatus: payment.transactionStatus,
          },
        },
        { session },
      )
    }

    await session.commitTransaction()
    return { payment, order }
  } catch (error) {
    await session.abortTransaction()
    throw error
  } finally {
    session.endSession()
  }
}
const verifyPayment = async (order_id: string) => {
  const verifiedPayment = await orderUtils.verifyPaymentAsync(order_id)

  if (verifiedPayment.length) {
    await Order.findOneAndUpdate(
      {
        'transaction.id': order_id,
      },
      {
        'transaction.bank_status': verifiedPayment[0].bank_status,
        'transaction.sp_code': verifiedPayment[0].sp_code,
        'transaction.sp_message': verifiedPayment[0].sp_message,
        'transaction.transactionStatus': verifiedPayment[0].transaction_status,
        'transaction.method': verifiedPayment[0].method,
        'transaction.date_time': verifiedPayment[0].date_time,
        status:
          verifiedPayment[0].bank_status == 'Success'
            ? 'Paid'
            : verifiedPayment[0].bank_status == 'Failed'
              ? 'Pending'
              : verifiedPayment[0].bank_status == 'Cancel'
                ? 'Cancelled'
                : '',
      },
    )
  }
  return verifiedPayment
}
const getAllOrders = async () => {
  const result = await Order.find()
  return result
}
const deleteOrder = async (id: string) => {
  const result = await Order.findByIdAndDelete(id)
  return result
}
const myOrder = async (email: string) => {
  const result = await Order.find({ email })
  return result
}
const updateOrderStatus = async (id: string, payload: { status: string }) => {
  const result = await Order.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'Order not found!')
  }
  return result
}
const orderRevenue = async () => {
  const result = await Order.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
  ])

  return result[0]?.totalRevenue || 0
}

export const orderService = {
  createOrder,
  verifyPayment,
  getAllOrders,
  deleteOrder,
  myOrder,
  orderRevenue,
  updateOrderStatus,
}
