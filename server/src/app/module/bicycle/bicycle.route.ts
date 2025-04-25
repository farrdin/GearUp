import { Router } from 'express'
import { bicycleController } from './bicycle.controller'

const bicycleRouter = Router()

bicycleRouter.post('/', bicycleController.createBicycle)
bicycleRouter.get('/', bicycleController.getBicycles)
bicycleRouter.get('/:bicycleId', bicycleController.getSingleBicycle)
bicycleRouter.patch('/:bicycleId', bicycleController.updateBicycle)
bicycleRouter.delete('/:bicycleId', bicycleController.deleteBicycle)

export default bicycleRouter
