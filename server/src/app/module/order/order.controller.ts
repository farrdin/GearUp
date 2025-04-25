import httpStatus from 'http-status'
import { Request, Response } from 'express'
import { orderService } from './order.service'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import AppError from '../../errors/appError'

const createOrder = catchAsync(async (req, res) => {
  const user = req.user
  if (!user) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'User not found')
  }
  const userInfo = {
    _id: user.id,
    name: user.name,
    email: user.email,
  }
  const order = await orderService.createOrder(userInfo, req.body, req.ip!)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Order Placed succesfully',
    data: order,
  })
})
const verifyPayment = catchAsync(async (req, res) => {
  const order = await orderService.verifyPayment(req.query.order_id as string)
  res.status(201).json({
    success: true,
    message: 'Order verified successfully',
    data: order,
  })
})
const updateOrderStatus = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const { status } = req.body

  const result = await orderService.updateOrderStatus(id, { status })

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order status updated successfully!',
    data: result,
  })
})
const orderRevenue = async (req: Request, res: Response) => {
  try {
    const result = await orderService.orderRevenue()
    res.send({
      message: 'Revenue calculated successfully',
      success: true,
      data: { totalRevenue: result },
    })
  } catch (error) {
    res.json(error)
  }
}
const getAllOrders = catchAsync(async (req, res) => {
  const result = await orderService.getAllOrders()
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Orders are getting succesfully',
    data: result,
  })
})
const deleteOrder = catchAsync(async (req, res) => {
  const orderId = req.params.orderId
  await orderService.deleteOrder(orderId)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Order deleted succesfully',
    data: {},
  })
})
const myOrder = catchAsync(async (req, res) => {
  const { email } = req.params
  const result = await orderService.myOrder(email)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'My Order is getting successfully',
    data: result,
  })
})

export const orderController = {
  createOrder,
  verifyPayment,
  myOrder,
  getAllOrders,
  updateOrderStatus,
  deleteOrder,
  orderRevenue,
}
