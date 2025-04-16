import Express, { Application, Request, Response } from 'express'
import cors from 'cors'
import router from './app/routes'
import { globalError } from './app/middlewares/globalError'
import notFound from './app/middlewares/notFound'

const app: Application = Express()

//parser
app.use(Express.json())
app.use(cors())

// API Routes
app.use('/api', router)

// APP Run
app.get('/', (req: Request, res: Response) => {
  res.send('GEARUP SERVER is running!')
})

// Default Handler
app.use(globalError)

//Not Found
app.use(notFound)

export default app
