import { Card } from '@/shared/ui/card'
import { Subtitle } from '@/shared/ui/subtitle'
import { StatisticsPieChart } from './statisticsPieChart'

export const Statistics = () => {
  return (
    <div className='flex flex-1 flex-col gap-6 md:gap-8'>
      <Subtitle>Expense Statistics</Subtitle>
      <Card classNames='justify-center items-center'>
        <StatisticsPieChart />
      </Card>
    </div>
  )
}
