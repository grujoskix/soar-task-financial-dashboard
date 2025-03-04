'use client'

import { useAuth } from '@/context/AuthContext'
import { useCards } from '@/context/CardContext'
import { Subtitle } from '@/shared/ui/subtitle'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { DashboardCard } from './dashboardCard'

export const DashboardCards = () => {
  const [showCards, setShowCards] = useState<boolean>(false)
  const { cards, activeCardIdx, setActiveCardIdx } = useCards()
  const { user } = useAuth()

  const displayedCards = showCards ? cards : cards.slice(0, 2)

  return (
    <div className='flex flex-1 flex-col gap-6 md:gap-8'>
      <div className='flex items-center justify-between'>
        <Subtitle>My Cards</Subtitle>
        <button
          type='button'
          onClick={() => setShowCards(!showCards)}
          className='rounded-md px-3 py-1 outline-none transition-all active:scale-95 active:bg-[#E6EFF5] md:hover:bg-[#E6EFF5]'
        >
          <span className='font-inter font-semibold text-[#343C6A] text-[14px] md:text-[17px]'>
            {!showCards ? 'See All' : 'See Less'}
          </span>
        </button>
      </div>

      <motion.div className='grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8'>
        <AnimatePresence>
          {displayedCards.map((card, i) => (
            <motion.div
              key={card._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <DashboardCard
                card={card}
                cardHolder={user?.name ?? ''}
                isActive={i === activeCardIdx}
                onClick={() => setActiveCardIdx(i)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
