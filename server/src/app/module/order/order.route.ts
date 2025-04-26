import { Router } from 'express'
import { orderController } from './order.controller'
import auth from '../../middlewares/auth'

const orderRouter = Router()

orderRouter.post('/create-order', auth('customer'), orderController.createOrder)
orderRouter.get('/verify', orderController.verifyPayment)
orderRouter.get('/', orderController.getAllOrders)
orderRouter.get('/my/:email', orderController.myOrder)
orderRouter.patch('/update/:id', orderController.updateOrderStatus)
orderRouter.delete('/delete/:orderId', orderController.deleteOrder)
orderRouter.get('/revenue', orderController.orderRevenue)

export default orderRouter
