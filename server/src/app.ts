import Express, { Application, Request, Response } from 'express'
import cors from 'cors'
import router from './app/routes'
import { globalError } from './app/middlewares/globalError'
import notFound from './app/middlewares/notFound'

const app: Application = Express()

//? Allowed frontend URL for Cors policy
const allowedOrigins = ['http://localhost:5173']

//parser
app.use(Express.json())
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
    credentials: true,
  })
)

// API Routes
app.use('/api', router)

// APP Run
app.get('/', (req: Request, res: Response) => {
  res.send({ status: 'success', message: 'GEARUP SERVER is running!' })
})

// Default Handler
app.use(globalError)

//Not Found
app.use(notFound)

export default app
