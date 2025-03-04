import { Card } from '@/shared/ui/card'
import { Subtitle } from '@/shared/ui/subtitle'
import { HistoryChart } from './historyChart'

export const History = () => (
  <div className='flex flex-1 flex-col gap-6 md:gap-8'>
    <Subtitle>Balance History</Subtitle>
    <Card classNames='flex flex-col gap-0 md:gap-5'>
      <HistoryChart />
    </Card>
  </div>
)
