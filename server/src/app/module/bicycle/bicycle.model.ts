import { model, Schema } from 'mongoose'
import { IBicycle } from './bicycle.interface'

const bicycleSchema = new Schema<IBicycle>(
  {
    name: {
      type: String,
      required: [true, 'Please provide the bicycle name'],
    },
    image: {
      type: String,
      required: [true, 'Please provide the bicycle image'],
    },
    brand: {
      type: String,
      required: [true, 'Please provide the bicycle brand name'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide the bicycle price'],
      min: [0, 'Price must be a positive number'],
    },
    type: {
      type: String,
      enum: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
      required: [true, 'Please provide the bicycle type'],
    },
    description: {
      type: String,
      required: [true, 'Please provide a description of the bicycle'],
    },
    quantity: {
      type: Number,
      required: [true, 'Please provide the quantity of the bicycle'],
      min: [0, 'Quantity cannot be less than 0'],
    },
    inStock: {
      type: Boolean,
      required: [true, 'Please specify if the bicycle is in stock'],
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const Bicycle = model<IBicycle>('Bicycle', bicycleSchema)

export default Bicycle
