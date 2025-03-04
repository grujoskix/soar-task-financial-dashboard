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
          <Transactions />
        </div>
      </div>

      <div className='flex flex-col gap-6 md:flex-row md:gap-8'>
        <div className='flex flex-[2]'>
          <Activity />
        </div>
        <div className='flex flex-1'>
          <Statistics />
        </div>
      </div>

      <div className='flex flex-col gap-6 md:flex-row md:gap-8'>
        <div className='flex flex-1'>
          <Transfer />
        </div>
        <div className='flex flex-[2]'>
          <History />
        </div>
      </div>
    </div>
  )
}
