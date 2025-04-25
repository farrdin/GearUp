export interface IUser {
  name: string
  email: string
  password: string
  photoURL: string | null
  role: 'customer' | 'admin'
  isBlocked: boolean
}
