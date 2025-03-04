import { type BankCard, BankCardType } from '@/types/card'
import {
  type BankCardTransaction,
  BankCardTransactionActivity,
  BankCardTransactionPurpose,
  BankCardTransactionType,
} from '@/types/transaction'

export const cardService = {
  fetchCards: async () => {
    // Mock API request/response
    return new Promise<BankCard[]>((resolve) =>
      setTimeout(
        () =>
          resolve([
            {
              _id: '1',
              balance: 5756,
              holder: 'Charlene Reed', // User
              valid: new Date('2026-12-22'),
              number: 3778852901951243,
              type: BankCardType.mastercard,
              transactions: mockTransactionsCardTwo,
            },
            {
              _id: '2',
              balance: 6820,
              holder: 'Charlene Reed', // User
              valid: new Date('2028-10-28'),
              number: 4578216937045823,
              type: BankCardType.visa,
              transactions: mockTransactionsCardOne,
            },
            {
              _id: '3',
              balance: 3800,
              holder: 'Charlene Reed', // User
              valid: new Date('2026-12-30'),
              number: 5283179402658197,
              type: BankCardType.visa,
              transactions: mockTransactionsCardOne,
            },
            {
              _id: '4',
              balance: 940,
              holder: 'Charlene Reed ', // User
              valid: new Date('2028-05-20'),
              number: 3791546283104762,
              type: BankCardType.mastercard,
              transactions: mockTransactionsCardTwo,
            },
          ]),
        300,
      ),
    )
  },
}

const mockTransactionsCardOne: BankCardTransaction[] = [
  // Monday, 2023-06-12: Entertainment
  {
    _id: '1',
    date: new Date('2023-06-12'),
    type: BankCardTransactionType.deposit,
    activity: BankCardTransactionActivity.deposit_paypal,
    purpose: BankCardTransactionPurpose.entertainment,
    balance: 530,
  },
  {
    _id: '2',
    date: new Date('2023-06-12'),
    type: BankCardTransactionType.withdraw,
    activity: BankCardTransactionActivity.deposit_from,
    purpose: BankCardTransactionPurpose.entertainment,
    balance: -510,
  },

  // Tuesday, 2023-06-13: Bill Expense
  {
    _id: '3',
    date: new Date('2023-06-13'),
    type: BankCardTransactionType.deposit,
    activity: BankCardTransactionActivity.deposit_person,
    purpose: BankCardTransactionPurpose.bill_expense,
    balance: 520,
  },
  {
    _id: '4',
    date: new Date('2023-06-13'),
    type: BankCardTransactionType.withdraw,
    activity: BankCardTransactionActivity.deposit_paypal,
    purpose: BankCardTransactionPurpose.bill_expense,
    balance: -540,
  },

  // Wednesday, 2023-06-14: Investment
  {
    _id: '5',
    date: new Date('2023-06-14'),
    type: BankCardTransactionType.deposit,
    activity: BankCardTransactionActivity.deposit_paypal,
    purpose: BankCardTransactionPurpose.investment,
    balance: 620,
  },
  {
    _id: '6',
    date: new Date('2023-06-14'),
    type: BankCardTransactionType.withdraw,
    activity: BankCardTransactionActivity.deposit_from,
    purpose: BankCardTransactionPurpose.investment,
    balance: -600,
  },

  // Thursday, 2023-06-15: Others
  {
    _id: '7',
    date: new Date('2023-06-15'),
    type: BankCardTransactionType.deposit,
    activity: BankCardTransactionActivity.deposit_paypal,
    purpose: BankCardTransactionPurpose.others,
    balance: 360,
  },
  {
    _id: '8',
    date: new Date('2023-06-15'),
    type: BankCardTransactionType.withdraw,
    activity: BankCardTransactionActivity.deposit_from,
    purpose: BankCardTransactionPurpose.others,
    balance: -340,
  },

  // Friday, 2023-06-16: Entertainment
  {
    _id: '9',
    date: new Date('2023-06-16'),
    type: BankCardTransactionType.deposit,
    activity: BankCardTransactionActivity.deposit_person,
    purpose: BankCardTransactionPurpose.entertainment,
    balance: 540,
  },
  {
    _id: '10',
    date: new Date('2023-06-16'),
    type: BankCardTransactionType.withdraw,
    activity: BankCardTransactionActivity.deposit_from,
    purpose: BankCardTransactionPurpose.entertainment,
    balance: -530,
  },

  // Saturday, 2023-06-17: Investment
  {
    _id: '11',
    date: new Date('2023-06-17'),
    type: BankCardTransactionType.deposit,
    activity: BankCardTransactionActivity.deposit_paypal,
    purpose: BankCardTransactionPurpose.investment,
    balance: 630,
  },
  {
    _id: '12',
    date: new Date('2023-06-17'),
    type: BankCardTransactionType.withdraw,
    activity: BankCardTransactionActivity.deposit_from,
    purpose: BankCardTransactionPurpose.investment,
    balance: -610,
  },

  // Sunday, 2023-06-18: Others
  {
    _id: '13',
    date: new Date('2023-06-18'),
    type: BankCardTransactionType.deposit,
    activity: BankCardTransactionActivity.deposit_paypal,
    purpose: BankCardTransactionPurpose.others,
    balance: 360,
  },
  {
    _id: '14',
    date: new Date('2023-06-18'),
    type: BankCardTransactionType.withdraw,
    activity: BankCardTransactionActivity.deposit_from,
    purpose: BankCardTransactionPurpose.others,
    balance: -350,
  },
]

const mockTransactionsCardTwo: BankCardTransaction[] = [
  // Monday, 2023-07-10: Entertainment
  {
    _id: '1',
    date: new Date('2023-07-10'),
    type: BankCardTransactionType.deposit,
    activity: BankCardTransactionActivity.deposit_person,
    purpose: BankCardTransactionPurpose.entertainment,
    balance: 570,
  },
  {
    _id: '2',
    date: new Date('2023-07-10'),
    type: BankCardTransactionType.withdraw,
    activity: BankCardTransactionActivity.deposit_from,
    purpose: BankCardTransactionPurpose.entertainment,
    balance: -550,
  },

  // Tuesday, 2023-07-11: Bill Expense
  {
    _id: '3',
    date: new Date('2023-07-11'),
    type: BankCardTransactionType.deposit,
    activity: BankCardTransactionActivity.deposit_paypal,
    purpose: BankCardTransactionPurpose.bill_expense,
    balance: 590,
  },
  {
    _id: '4',
    date: new Date('2023-07-11'),
    type: BankCardTransactionType.withdraw,
    activity: BankCardTransactionActivity.deposit_from,
    purpose: BankCardTransactionPurpose.bill_expense,
    balance: -580,
  },

  // Wednesday, 2023-07-12: Investment
  {
    _id: '5',
    date: new Date('2023-07-12'),
    type: BankCardTransactionType.deposit,
    activity: BankCardTransactionActivity.deposit_paypal,
    purpose: BankCardTransactionPurpose.investment,
    balance: 690,
  },
  {
    _id: '6',
    date: new Date('2023-07-12'),
    type: BankCardTransactionType.withdraw,
    activity: BankCardTransactionActivity.deposit_from,
    purpose: BankCardTransactionPurpose.investment,
    balance: -670,
  },

  // Thursday, 2023-07-13: Others
  {
    _id: '7',
    date: new Date('2023-07-13'),
    type: BankCardTransactionType.deposit,
    activity: BankCardTransactionActivity.deposit_paypal,
    purpose: BankCardTransactionPurpose.others,
    balance: 410,
  },
  {
    _id: '8',
    date: new Date('2023-07-13'),
    type: BankCardTransactionType.withdraw,
    activity: BankCardTransactionActivity.deposit_from,
    purpose: BankCardTransactionPurpose.others,
    balance: -390,
  },

  // Friday, 2023-07-14: Entertainment
  {
    _id: '9',
    date: new Date('2023-07-14'),
    type: BankCardTransactionType.deposit,
    activity: BankCardTransactionActivity.deposit_person,
    purpose: BankCardTransactionPurpose.entertainment,
    balance: 560,
  },
  {
    _id: '10',
    date: new Date('2023-07-14'),
    type: BankCardTransactionType.withdraw,
    activity: BankCardTransactionActivity.deposit_from,
    purpose: BankCardTransactionPurpose.entertainment,
    balance: -540,
  },

  // Saturday, 2023-07-15: Investment
  {
    _id: '11',
    date: new Date('2023-07-15'),
    type: BankCardTransactionType.deposit,
    activity: BankCardTransactionActivity.deposit_person,
    purpose: BankCardTransactionPurpose.investment,
    balance: 700,
  },
  {
    _id: '12',
    date: new Date('2023-07-15'),
    type: BankCardTransactionType.withdraw,
    activity: BankCardTransactionActivity.deposit_from,
    purpose: BankCardTransactionPurpose.investment,
    balance: -680,
  },

  // Sunday, 2023-07-16: Others
  {
    _id: '13',
    date: new Date('2023-07-16'),
    type: BankCardTransactionType.deposit,
    activity: BankCardTransactionActivity.deposit_paypal,
    purpose: BankCardTransactionPurpose.others,
    balance: 410,
  },
  {
    _id: '14',
    date: new Date('2023-07-16'),
    type: BankCardTransactionType.withdraw,
    activity: BankCardTransactionActivity.deposit_person,
    purpose: BankCardTransactionPurpose.others,
    balance: -400,
  },
]
