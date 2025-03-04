'use client'

import { useCards } from '@/context/CardContext'
import { Card } from '@/shared/ui/card'
import { Subtitle } from '@/shared/ui/subtitle'
import { TransactionActivity } from '@/types/transaction'
import { cn } from '@/utils/className'
import { motion } from 'framer-motion'
import { calculateBalances, generateSteps, getBarHeight } from './activityUtils'

export const Activity = () => {
  const { cards, activeCardIdx } = useCards()
  const transactions = cards[activeCardIdx]?.transactions || []

  const { maxBalance, dailyBalances } = calculateBalances(transactions)

  const balanceSteps = generateSteps(maxBalance)

  return (
    <div className='flex flex-1 flex-col gap-6 md:gap-8'>
      <Subtitle>Weekly Activity</Subtitle>
      <Card classNames='flex flex-col gap-0 md:gap-5'>
        <div className='flex justify-end gap-7 md:gap-[30px]'>
          {Object.keys(TransactionActivity).map((act) => (
            <div key={act} className='flex items-center gap-[10px]'>
              <div
                className={cn(
                  'h-3 w-3 rounded-full md:h-4 md:w-4',
                  act === TransactionActivity.deposit
                    ? 'bg-[#396AFF]'
                    : 'bg-[#232323]',
                )}
              />
              <small className='font-inter font-normal text-[#718EBF] text-xs capitalize md:text-base'>
                {TransactionActivity[act as keyof typeof TransactionActivity]}
              </small>
            </div>
          ))}
        </div>
        <div className='relative mb-5 flex flex-col'>
          <div className='-bottom-4 absolute left-0 flex h-full w-full justify-around pl-10'>
            {Object.keys(dailyBalances).map((day, i) => (
              <div
                key={day}
                className='flex h-full flex-col items-center justify-end gap-4'
              >
                <div className='flex h-full items-end gap-1 md:gap-3'>
                  <motion.span
                    initial={{ height: '0%' }}
                    animate={{
                      height: getBarHeight(
                        dailyBalances[i].withdraw,
                        maxBalance,
                      ),
                    }}
                    transition={{ duration: 0.5 }}
                    className='w-[7px] rounded-[30px] bg-[#232323] md:w-[15px]'
                  />
                  <motion.span
                    initial={{ height: '0%' }}
                    animate={{
                      height: getBarHeight(
                        dailyBalances[i].deposit,
                        maxBalance,
                      ),
                    }}
                    transition={{ duration: 0.5 }}
                    className='w-[7px] rounded-[30px] bg-[#396AFF] md:w-[15px]'
                  />
                </div>
                <span className='font-inter font-normal text-[#718EBF] text-xs md:text-[13px]'>
                  {days[Number(day)]}
                </span>
              </div>
            ))}
          </div>

          {balanceSteps.map((step) => (
            <div key={step} className='flex h-9 items-center gap-3'>
              <span className='min-w-7 text-right font-inter font-normal text-[#718EBF] text-xs md:text-[13px]'>
                {step}
              </span>
              <hr className='w-full border-[#F3F3F5]' />
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

const days: Record<number, string> = {
  0: 'Sun',
  1: 'Mon',
  2: 'Tue',
  3: 'Wed',
  4: 'Thu',
  5: 'Fri',
  6: 'Sat',
}
