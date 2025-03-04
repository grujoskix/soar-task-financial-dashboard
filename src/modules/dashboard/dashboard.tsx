import {
  type Transaction,
  TransactionActivity,
  TransactionPurpose,
  TransactionType,
} from '@/types/transaction'
import type { User } from '@/types/user'
import { Activity } from './activity/activity'
import { DashboardCards } from './dashboardCards/dashboardCards'
import { History } from './history/history'
import { Statistics } from './statistics/statistics'
import { Transactions } from './transactions/transactions'
import { Transfer } from './transfer/transfer'

export const Dashboard = () => {
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col gap-6 md:flex-row md:gap-8'>
        <div className='flex flex-[2]'>
          <DashboardCards />
        </div>
        <div className='flex flex-1'>
          <Transactions transactions={transactionsData} />
        </div>
      </div>

      <div className='flex flex-col gap-6 md:flex-row md:gap-8'>
        <div className='flex flex-[2]'>
          <Activity transactions={activityData} />
        </div>
        <div className='flex flex-1'>
          <Statistics transactions={activityData} />
        </div>
      </div>

      <div className='flex flex-col gap-6 md:flex-row md:gap-8'>
        <div className='flex flex-1'>
          <Transfer users={usersData} />
        </div>
        <div className='flex flex-[2]'>
          <History transactions={[]} />
        </div>
      </div>
    </div>
  )
}

const usersData: User[] = [
  {
    _id: '1',
    avatar: 'livia',
    name: 'Livia Bator',
    position: 'CEO',
  },
  {
    _id: '2',
    avatar: 'randy',
    name: 'Randy Press',
    position: 'Director',
  },
  {
    _id: '3',
    avatar: 'workman',
    name: 'Workman',
    position: 'Designer',
  },
]

const transactionsData: Transaction[] = [
  {
    _id: '1',
    date: new Date(),
    type: TransactionType.deposit_from,
    activity: TransactionActivity.withdraw,
    purpose: TransactionPurpose.entertainment,
    balance: -850,
  },
  {
    _id: '2',
    date: new Date(),
    type: TransactionType.deposit_paypal,
    activity: TransactionActivity.deposit,
    purpose: TransactionPurpose.bill_expense,
    balance: 2500,
  },
  {
    _id: '3',
    date: new Date(),
    type: TransactionType.deposit_person,
    activity: TransactionActivity.deposit,
    purpose: TransactionPurpose.investment,
    balance: 5400,
  },
]

const activityData: Transaction[] = [
  // Saturday (March 4, 2023)
  {
    _id: '1',
    date: new Date(2023, 2, 4),
    type: TransactionType.deposit_paypal,
    activity: TransactionActivity.deposit,
    purpose: TransactionPurpose.entertainment,
    balance: 200, // +$200
  },
  {
    _id: '2',
    date: new Date(2023, 2, 4),
    type: TransactionType.deposit_from,
    activity: TransactionActivity.withdraw,
    purpose: TransactionPurpose.others,
    balance: -400, // -$400
  },

  // Sunday (March 5, 2023)
  {
    _id: '3',
    date: new Date(2023, 2, 5),
    type: TransactionType.deposit_person,
    activity: TransactionActivity.deposit,
    purpose: TransactionPurpose.bill_expense,
    balance: 250, // +$250
  },
  {
    _id: '4',
    date: new Date(2023, 2, 5),
    type: TransactionType.deposit_paypal,
    activity: TransactionActivity.withdraw,
    purpose: TransactionPurpose.entertainment,
    balance: -300, // -$300
  },

  // Monday (March 6, 2023)
  {
    _id: '5',
    date: new Date(2023, 2, 6),
    type: TransactionType.deposit_from,
    activity: TransactionActivity.deposit,
    purpose: TransactionPurpose.investment,
    balance: 100, // +$100
  },
  {
    _id: '6',
    date: new Date(2023, 2, 6),
    type: TransactionType.deposit_person,
    activity: TransactionActivity.withdraw,
    purpose: TransactionPurpose.bill_expense,
    balance: -500, // -$500
  },

  // Tuesday (March 7, 2023)
  {
    _id: '7',
    date: new Date(2023, 2, 7),
    type: TransactionType.deposit_paypal,
    activity: TransactionActivity.deposit,
    purpose: TransactionPurpose.others,
    balance: 400, // +$400
  },
  {
    _id: '8',
    date: new Date(2023, 2, 7),
    type: TransactionType.deposit_from,
    activity: TransactionActivity.withdraw,
    purpose: TransactionPurpose.entertainment,
    balance: -300, // -$300
  },

  // Wednesday (March 8, 2023)
  {
    _id: '9',
    date: new Date(2023, 2, 8),
    type: TransactionType.deposit_person,
    activity: TransactionActivity.deposit,
    purpose: TransactionPurpose.investment,
    balance: 250, // +$250
  },
  {
    _id: '10',
    date: new Date(2023, 2, 8),
    type: TransactionType.deposit_paypal,
    activity: TransactionActivity.withdraw,
    purpose: TransactionPurpose.bill_expense,
    balance: -150, // -$150
  },

  // Thursday (March 9, 2023)
  {
    _id: '11',
    date: new Date(2023, 2, 9),
    type: TransactionType.deposit_from,
    activity: TransactionActivity.deposit,
    purpose: TransactionPurpose.entertainment,
    balance: 50, // +$50
  },
  {
    _id: '12',
    date: new Date(2023, 2, 9),
    type: TransactionType.deposit_person,
    activity: TransactionActivity.withdraw,
    purpose: TransactionPurpose.others,
    balance: -200, // -$200
  },

  // Friday (March 10, 2023)
  {
    _id: '13',
    date: new Date(2023, 2, 10),
    type: TransactionType.deposit_paypal,
    activity: TransactionActivity.deposit,
    purpose: TransactionPurpose.bill_expense,
    balance: 300, // +$300
  },
  {
    _id: '14',
    date: new Date(2023, 2, 10),
    type: TransactionType.deposit_from,
    activity: TransactionActivity.withdraw,
    purpose: TransactionPurpose.entertainment,
    balance: -100, // -$100
  },
]
