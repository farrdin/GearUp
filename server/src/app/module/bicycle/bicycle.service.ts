import QueryBuilder from '../../querys/QueryBuilder'
import { IBicycle } from './bicycle.interface'
import Bicycle from './bicycle.model'

const createBicycle = async (payload: IBicycle): Promise<IBicycle> => {
  const result = await Bicycle.create(payload)
  return result
}
const getBicycles = async (
  query: Record<string, unknown>,
): Promise<IBicycle[]> => {
  const queryBuilder = new QueryBuilder(Bicycle.find(), query)
    .search(['name', 'brand', 'type'])
    .filter()
    .paginate()
    .sort()
    .select()
  return await queryBuilder.modelQuery
}
const getSingleBicycle = async (bicycleId: string) => {
  const result = await Bicycle.findById(bicycleId)
  return result
}
const updateBicycle = async (id: string, data: IBicycle) => {
  const result = await Bicycle.findByIdAndUpdate(id, data, {
    new: true,
  })
  return result
}
const deleteBicycle = async (bicycleId: string) => {
  const result = await Bicycle.findByIdAndDelete(bicycleId)
  return result
}

export const bicycleService = {
  createBicycle,
  getBicycles,
  getSingleBicycle,
  updateBicycle,
  deleteBicycle,
}
