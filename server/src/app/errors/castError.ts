import mongoose from 'mongoose'
import { TErrorSources, TGenericErrorResponse } from '../global/errorTypes'

const castError = (err: mongoose.Error.CastError): TGenericErrorResponse => {
  const errorSources: TErrorSources = [
    {
      path: err.path,
      message: err.message,
    },
  ]

  const statusCode = 400

  return {
    statusCode,
    message: 'Cast Error',
    errorSources,
  }
}

export default castError
