import { Router } from 'express'
import { orderController } from './order.controller'
import auth from '../../middlewares/auth'

const orderRouter = Router()

orderRouter.post('/create-order', auth('customer'), orderController.createOrder)
orderRouter.post('/verify-order', orderController.verifyPayment)
orderRouter.get('/all-orders', orderController.getAllOrders)
orderRouter.delete('/delete-order/:orderId', orderController.deleteOrder)
orderRouter.get('/my-order/:email', orderController.myOrder)
orderRouter.get('/revenue', orderController.orderRevenue)

export default orderRouter
