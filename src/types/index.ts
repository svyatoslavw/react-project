export interface UserResponse {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

export interface Comment {
  postId: string
  id: string
  name: string
  email: string
  body: string
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface Geo {
  lat: string
  lng: string
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}

type TypedPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

export type User = TypedPick<UserResponse, "id" | "name" | "username" | "email"> & {
  city: string
}
