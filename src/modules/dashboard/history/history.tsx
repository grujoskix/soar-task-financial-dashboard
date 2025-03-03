'use client'

import { Card } from '@/shared/ui/card'
import { Subtitle } from '@/shared/ui/subtitle'
import type { Transaction } from '@/types/transaction'
import { HistoryChart } from './historyChart'

type Props = {
  transactions: Transaction[]
}

export const History = ({ transactions }: Props) => {
  console.log(transactions)

  return (
    <div className='flex flex-1 flex-col gap-6 md:gap-8'>
      <Subtitle>Balance History</Subtitle>
      <Card classNames='flex flex-col gap-0 md:gap-5'>
        <HistoryChart />
      </Card>
    </div>
  )
}
