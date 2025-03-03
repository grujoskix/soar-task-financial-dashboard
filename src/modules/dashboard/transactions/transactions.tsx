import { Card } from '@/shared/ui/card'
import { Subtitle } from '@/shared/ui/subtitle'
import type { Transaction } from '@/types/transaction'
import { TransactionItem } from './transactionItem'

type Props = {
  transactions: Transaction[]
}

export const Transactions = ({ transactions }: Props) => (
  <div className='flex flex-1 flex-col gap-6 md:gap-8'>
    <Subtitle>Recent Transaction</Subtitle>
    <Card classNames='overflow-x-hidden overflow-y-auto no-scrollbar scroll-smooth'>
      <div className='flex flex-col gap-3'>
        {transactions.map((trans) => (
          <TransactionItem key={trans._id} transaction={trans} />
        ))}
      </div>
    </Card>
  </div>
)
