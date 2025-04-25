import { NextFunction, Request, Response } from 'express'
import catchAsync from '../utils/catchAsync'
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from '../config'
import User from '../module/user/user.model'

const auth = (...requiredRoles: string[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers?.authorization
    if (!authHeader || !authHeader.startsWith('Bearer')) {
      throw new Error('Invalid token')
    }
    //? get token from header
    const token = authHeader.split(' ')[1]

    //? verify token
    const decoded = jwt.verify(
      token,
      config.access_secret as string,
    ) as JwtPayload

    if (!decoded || typeof decoded !== 'object' || !('email' in decoded)) {
      throw new Error('Invalid token payload')
    }
    const { email, role } = decoded

    const user = await User.findOne({ email })

    if (!user) {
      throw new Error('User is not found')
    }
    const userStatus = user?.isBlocked
    if (userStatus === true) {
      throw new Error('User is blocked')
    }
    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new Error('You Have No Permission to Access Here')
    }
    req.user = {
      _id: user._id,
      email: user.email,
      name: user.name,
      role: user.role,
    }
    next()
  })
}
export default auth
