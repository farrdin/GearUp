import { Router } from 'express'
import { orderController } from './order.controller'
import auth from '../../middlewares/auth'

const orderRouter = Router()

orderRouter.use((req, res, next) => {
  console.log('Incoming request:', req.method, req.url)
  next()
})
orderRouter.get('/', orderController.getAllOrders)
orderRouter.get('/:email', orderController.myOrder)
orderRouter.get('/revenue', orderController.orderRevenue)
orderRouter.post('/create-order', auth('customer'), orderController.createOrder)
orderRouter.post('/verify', orderController.verifyPayment)
orderRouter.delete('/delete/:orderId', orderController.deleteOrder)

export default orderRouter
