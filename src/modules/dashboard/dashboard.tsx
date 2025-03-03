import { DashboardCards } from './dashboardCards/dashboardCards'

export const Dashboard = () => {
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col gap-6 md:flex-row md:gap-8'>
        <div className='flex flex-[2]'>
          <DashboardCards />
        </div>
        <div className='flex flex-1'>2</div>
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
