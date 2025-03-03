import { type Transaction, TransactionType } from '@/types/transaction'
import { DashboardCards } from './dashboardCards/dashboardCards'
import { Transactions } from './transactions/transactions'

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
        <div className='flex flex-[2]'>3</div>
        <div className='flex flex-1'>4</div>
      </div>

      <div className='flex flex-col gap-6 md:flex-row md:gap-8'>
        <div className='flex flex-1'>5</div>
        <div className='flex flex-[2]'>6</div>
      </div>
    </div>
  )
}

const transactionsData: Transaction[] = [
  {
    _id: '1',
    date: new Date(),
    type: TransactionType.deposit_from,
    balance: -850,
  },
  {
    _id: '2',
    date: new Date(),
    type: TransactionType.deposit_paypal,
    balance: 2500,
  },
  {
    _id: '3',
    date: new Date(),
    type: TransactionType.deposit_person,
    balance: 5400,
  },
]
