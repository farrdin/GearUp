import mongoose from 'mongoose'
import config from './app/config'
import app from './app'
import { Server } from 'http'

let server: Server
async function main() {
  try {
    await mongoose.connect(config.mongouri as string)
    server = app.listen(config.port, () => {
      console.log(`GEARUP Server is Running on port ${config.port}`)
    })
  } catch (error) {
    console.log(error)
  }
}
main()

process.on('unhandledRejection', () => {
  console.log(`😈 unahandledRejection is detected , Server shutting down ...`)
  if (server) {
    server.close(() => {
      process.exit(1)
    })
  }
  process.exit(1)
})
process.on('uncaughtException', () => {
  console.log(`😈 uncaughtException is detected , Server shutting down ...`)
  process.exit(1)
})
