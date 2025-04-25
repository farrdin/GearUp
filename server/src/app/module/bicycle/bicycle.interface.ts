export interface IBicycle {
  name: string
  image: string
  brand: string
  price: number
  type: 'Mountain' | 'Road' | 'Hybrid' | 'BMX' | 'Electric'
  description: string
  quantity: number
  inStock: boolean
}
