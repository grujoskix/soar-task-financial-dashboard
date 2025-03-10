export enum TransactionType {
  deposit_from = 'deposit_from',
  deposit_paypal = 'deposit_paypal',
  deposit_person = 'deposit_person',
}

export enum TransactionActivity {
  deposit = 'deposit',
  withdraw = 'withdraw',
}

export enum TransactionPurpose {
  entertainment = 'entertainment',
  bill_expense = 'bill_expense',
  investment = 'investment',
  others = 'others',
}

export type Transaction = {
  _id?: string
  date: Date
  type: TransactionType
  activity: TransactionActivity
  purpose: TransactionPurpose
  balance: number
}

///

export enum BankCardTransactionActivity {
  deposit_from = 'deposit_from',
  deposit_paypal = 'deposit_paypal',
  deposit_person = 'deposit_person',
}

export enum BankCardTransactionPurpose {
  entertainment = 'entertainment',
  bill_expense = 'bill_expense',
  investment = 'investment',
  others = 'others',
}

export enum BankCardTransactionType {
  deposit = 'deposit',
  withdraw = 'withdraw',
}

export type BankCardTransaction = {
  _id?: string
  date: Date
  type: BankCardTransactionType
  activity: BankCardTransactionActivity
  purpose: BankCardTransactionPurpose
  balance: number
}
