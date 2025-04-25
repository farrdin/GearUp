import { Router } from 'express'
import { bicycleController } from './bicycle.controller'

const bicycleRouter = Router()

bicycleRouter.get('/', bicycleController.getBicycles)
bicycleRouter.get('/:bicycleId', bicycleController.getSingleBicycle)
bicycleRouter.post('/create-bicycle', bicycleController.createBicycle)
bicycleRouter.patch('/:bicycleId', bicycleController.updateBicycle)
bicycleRouter.delete('/:bicycleId', bicycleController.deleteBicycle)

export default bicycleRouter
