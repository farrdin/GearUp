import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join((process.cwd(), '.env')) })

export default {
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT,
  mongouri: process.env.MONGO_URI,
  bcrypt_salt: process.env.BCRYPT_SALT_ROUNDS,
  access_secret: process.env.JWT_ACCESS_SECRET,
  refresh_secret: process.env.JWT_REFRESH_SECRET,
  access_expires: process.env.JWT_ACCESS_EXPIRES,
  refresh_expires: process.env.JWT_REFRESH_EXPIRES,
  sp: {
    sp_endpoint: process.env.SP_ENDPOINT,
    sp_username: process.env.SP_USERNAME,
    sp_password: process.env.SP_PASSWORD,
    sp_prefix: process.env.SP_PREFIX,
    sp_return_url: process.env.SP_RETURN_URL,
  },
}
