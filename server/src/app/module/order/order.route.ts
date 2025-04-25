import { Router } from 'express'
import { orderController } from './order.controller'
import auth from '../../middlewares/auth'

const orderRouter = Router()

orderRouter.get('/', orderController.getAllOrders)
orderRouter.get('/:email', orderController.myOrder)
orderRouter.post('/create-order', auth('customer'), orderController.createOrder)
orderRouter.post('/verify', orderController.verifyPayment)
orderRouter.delete('/delete-order/:orderId', orderController.deleteOrder)
orderRouter.get('/revenue', orderController.orderRevenue)

export default orderRouter
