import httpStatus from 'http-status'
import { Request, Response } from 'express'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { AuthService } from './auth.service'
import { JwtPayload } from 'jsonwebtoken'

const register = catchAsync(async (req, res) => {
  const result = await AuthService.register(req.body)
  sendResponse(res, {
    success: true,
    message: 'User registered successfully',
    statusCode: httpStatus.CREATED,
    data: result,
  })
})

const login = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.login(req.body)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'User log in successfully',
    token: result.token,
    data: result.authenticUser,
  })
})
const changePassword = catchAsync(async (req, res) => {
  const result = await AuthService.changePassword(
    req.user as JwtPayload,
    req.body,
  )
  sendResponse(res, {
    success: true,
    message: 'Password changed successfully',
    statusCode: httpStatus.OK,
    data: result,
  })
})

export const AuthController = {
  login,
  register,
  changePassword,
}
