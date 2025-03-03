export enum TransactionType {
  deposit_from = 'deposit_from',
  deposit_paypal = 'deposit_paypal',
  deposit_person = 'deposit_person',
}

export type Transaction = {
  _id?: string
  date: Date
  type: TransactionType
  balance: number
}
