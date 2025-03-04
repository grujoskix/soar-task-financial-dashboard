import type { BankCardTransaction } from './transaction'

export enum BankCardType {
  mastercard = 'mastercard',
  visa = 'visa',
}

export type BankCard = {
  _id: string
  balance: number
  holder: string // User
  valid: Date
  number: number
  type: BankCardType
  transactions: BankCardTransaction[]
}
