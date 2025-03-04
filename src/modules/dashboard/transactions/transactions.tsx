'use client'

import { useCards } from '@/context/CardContext'
import { Card } from '@/shared/ui/card'
import { Subtitle } from '@/shared/ui/subtitle'
import { TransactionItem } from './transactionItem'

export const Transactions = () => {
  const { cards, activeCardIdx } = useCards()
  const transactions = cards[activeCardIdx]?.transactions || []

  return (
    <div className='flex flex-1 flex-col gap-6 md:gap-8'>
      <Subtitle>Recent Transaction</Subtitle>
      <Card classNames='overflow-x-hidden overflow-y-auto no-scrollbar scroll-smooth max-h-[251px]'>
        <div className='flex flex-1 flex-col gap-3'>
          {transactions
            .map((trans) => (
              <TransactionItem key={trans._id} transaction={trans} />
            ))
            .reverse()}
        </div>
      </Card>
    </div>
  )
}
