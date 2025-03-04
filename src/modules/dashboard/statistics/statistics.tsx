'use client'

import { useCards } from '@/context/CardContext'
import { Card } from '@/shared/ui/card'
import { Subtitle } from '@/shared/ui/subtitle'
import { StatisticsPieChart } from './statisticsPieChart'
import { mapStatisticsData } from './statisticsUtils'

export const Statistics = () => {
  const { cards, activeCardIdx } = useCards()
  const transactions = cards[activeCardIdx]?.transactions || []

  const statisticsData = mapStatisticsData(transactions)

  return (
    <div className='flex flex-1 flex-col gap-6 md:gap-8'>
      <Subtitle>Expense Statistics</Subtitle>
      <Card classNames='justify-center items-center !pl-0 !pr-2'>
        <StatisticsPieChart statistics={statisticsData} />
      </Card>
    </div>
  )
}
