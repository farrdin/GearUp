import { Router } from 'express'
import authRouter from '../module/auth/auth.router'
import orderRouter from '../module/order/order.route'
import bicycleRouter from '../module/bicycle/bicycle.route'
import userRouter from '../module/user/user.router'

const router = Router()

const moduleRoutes = [
  {
    path: '/auth',
    route: authRouter,
  },
  {
    path: '/bicycles',
    route: bicycleRouter,
  },
  {
    path: '/users',
    route: userRouter,
  },
  {
    path: '/orders',
    route: orderRouter,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
