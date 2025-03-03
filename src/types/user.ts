export type User = {
  _id: string
  avatar?: string | null
  name: string
  username?: string
  email?: string
  password?: string
  position?: string
  birth_date?: Date | null
  address_present?: string
  address_permanent?: string
  city?: string
  country?: string
  code?: string
}
