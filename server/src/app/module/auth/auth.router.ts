import { Router } from 'express'
import { AuthController } from './auth.controller'
import validateRequest from '../../middlewares/validateRequest'
import { AuthValidation } from './auth.validation'
import { userValidation } from '../user/user.validation'

const authRouter = Router()

authRouter.post(
  '/register',
  validateRequest(userValidation.userValidationSchema),
  AuthController.register
)
authRouter.post(
  '/login',
  validateRequest(AuthValidation.loginValidationSchema),
  AuthController.login
)

export default authRouter
