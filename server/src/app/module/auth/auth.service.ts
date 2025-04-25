import config from '../../config'
import sendMail from '../../utils/sendMail'
import { IUser } from '../user/user.interface'
import { ILoginUser } from './auth.interface'
import bcrypt from 'bcrypt'
import jwt, { JwtPayload } from 'jsonwebtoken'
import User from '../user/user.model'

const register = async (payload: IUser) => {
  const userPayload = {
    ...payload,
    role: payload.role || 'customer',
  }
  const result = await User.create(userPayload)
  return {
    _id: result._id,
    name: result.name,
    email: result.email,
    role: result.role,
  }
}

const login = async (payload: ILoginUser) => {
  const user = await User.findOne({ email: payload.email }).select('+password')

  if (!user) {
    throw new Error('No user with this Email')
  }
  const userStatus = user?.isBlocked
  if (userStatus === true) {
    throw new Error('User is blocked')
  }
  const isPasswordMatch = await bcrypt.compare(payload.password, user.password)
  if (!isPasswordMatch) {
    throw new Error('Password is incorrect')
  }

  const token = jwt.sign(
    {
      email: user?.email,
      name: user?.name,
      role: user?.role,
    },
    config.access_secret as string,
    {
      expiresIn: '1d',
    }
  )

  const authenticUser = {
    name: user?.name,
    email: user?.email,
    role: user?.role,
  }

  return { token, authenticUser }
}
const changePassword = async (
  user: JwtPayload,
  payload: { oldPassword: string; newPassword: string }
) => {
  const isUserExist = await User.findOne({
    email: user?.email,
    role: user?.role,
  }).select('+password')

  if (!isUserExist) {
    throw new Error('User not found')
  }
  const isPasswordMatched = await bcrypt.compare(
    payload.oldPassword,
    isUserExist.password
  )
  if (!isPasswordMatched) {
    throw new Error('Old password is incorrect')
  }
  const hashedNewPassword = await bcrypt.hash(payload.newPassword, 10)
  const updatedUser = await User.findOneAndUpdate(
    {
      email: user?.email,
      role: user?.role,
    },
    { password: hashedNewPassword },
    { new: true }
  )
  if (!updatedUser) {
    throw new Error('Failed to update password')
  }
  return {
    name: updatedUser.name,
    email: updatedUser.email,
    role: updatedUser.role,
  }
}

export const AuthService = {
  login,
  changePassword,
  register,
}
