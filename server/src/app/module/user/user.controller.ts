import httpStatus from 'http-status'
import { userService } from './user.service'
import sendResponse from '../../utils/sendResponse'
import catchAsync from '../../utils/catchAsync'

const createUser = catchAsync(async (req, res) => {
  const payload = req.body
  const result = await userService.createUser(payload)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'User has been created',
    data: result,
  })
})
const getMyProfile = catchAsync(async (req, res) => {
  const { email } = req.params
  const result = await userService.getMyProfile(email)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'My Profile is getting succesfully',
    data: result,
  })
})
const getUser = catchAsync(async (req, res) => {
  const result = await userService.getUsers()
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Users are getting succesfully',
    data: result,
  })
})
const getSingleUser = catchAsync(async (req, res) => {
  const userId = req.params.userId
  const result = await userService.getSingleUser(userId)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User is getting succesfully',
    data: result,
  })
})
const updateUser = catchAsync(async (req, res) => {
  const userId = req.params.userId
  const body = req.body
  const result = await userService.updateUser(userId, body)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User updated succesfully',
    data: result,
  })
})
const deleteUser = catchAsync(async (req, res) => {
  const userId = req.params.userId
  await userService.deleteUser(userId)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User deleted succesfully',
    data: {},
  })
})
const blockUser = catchAsync(async (req, res) => {
  const userId = req.params.userId
  await userService.blockUser(userId)
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User blocked successfully',
    data: {},
  })
})

export const userController = {
  createUser,
  getMyProfile,
  getUser,
  getSingleUser,
  updateUser,
  deleteUser,
  blockUser,
}
