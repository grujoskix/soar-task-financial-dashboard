'use client'

import { Icon } from '@/shared/ui/icon'
import { ICON_PATHS } from '@/shared/ui/iconPaths'
import type { BankCard } from '@/types/card'
import { cn } from '@/utils/className'
import { formatCurrency } from '@/utils/formatCurrency'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { formatCardExpiryDate, maskCardNumber } from './dashboardCardUtils'

type Props = {
  card: BankCard
  cardHolder: string
  isActive?: boolean
  onClick: () => void
}

export const DashboardCard = ({
  card,
  cardHolder,
  isActive,
  onClick,
}: Props) => {
  const cardBalance = formatCurrency(card.balance).slice(1)
  const cardValid = formatCardExpiryDate(card.valid)
  const cardNumber = maskCardNumber(card.number)

  return (
    <motion.button
      type='button'
      whileHover={{ scale: 1.05 }}
      whileFocus={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className='w-full outline-none'
    >
      <div
        className={cn(
          'flex flex-1 flex-col gap-1 overflow-hidden rounded-2xl transition-colors md:gap-2 md:rounded-3xl',
          !isActive
            ? 'border border-[#DFEAF2] bg-white'
            : 'bg-gradient-to-r from-[#5B5A6F] to-[#000000]',
        )}
      >
        <div className='flex flex-col gap-4 p-4 md:gap-6 md:p-6'>
          <div className='flex items-center justify-between'>
            <div className='flex flex-col items-start text-left'>
              <span
                className={cn(
                  'font-lato font-normal text-[11px] transition-colors md:text-xs',
                  !isActive ? 'text-[#718EBF]' : 'text-white',
                )}
              >
                Balance
              </span>
              <strong
                className={cn(
                  'font-lato font-semibold text-base transition-colors md:text-xl',
                  !isActive ? 'text-[#343C6A]' : 'text-white',
                )}
              >
                {cardBalance}
              </strong>
            </div>
            <Image
              src={`/images/chip-card-${!isActive ? 'dark' : 'light'}.png`}
              width={35}
              height={35}
              className='h-auto w-[35px]'
              alt='Card Chip'
            />
          </div>
          <div className='flex items-center gap-12'>
            <div className='flex flex-col items-start text-left'>
              <span
                className={cn(
                  'font-lato font-normal text-[11px] transition-colors md:text-xs',
                  !isActive ? 'text-[#718EBF]' : 'text-white',
                )}
              >
                CARD HOLDER
              </span>
              <strong
                className={cn(
                  'font-lato font-semibold text-base transition-colors md:text-xl',
                  !isActive ? 'text-[#343C6A]' : 'text-white',
                )}
              >
                {cardHolder}
              </strong>
            </div>
            <div className='flex flex-col items-start text-left'>
              <span
                className={cn(
                  'font-lato font-normal text-[11px] transition-colors md:text-xs',
                  !isActive ? 'text-[#718EBF]' : 'text-white',
                )}
              >
                VALID THRU
              </span>
              <strong
                className={cn(
                  'font-lato font-semibold text-base transition-colors md:text-xl',
                  !isActive ? 'text-[#343C6A]' : 'text-white',
                )}
              >
                {cardValid}
              </strong>
            </div>
          </div>
        </div>
        <div
          className={cn(
            'flex items-center justify-between p-4 transition-colors md:p-6',
            !isActive
              ? 'border-[#DFEAF2] border-t bg-white'
              : 'bg-gradient-to-b from-[#FFFFFF]/15 to-[#FFFFFF]/0',
          )}
        >
          <strong
            className={cn(
              'font-lato font-semibold text-base transition-colors md:text-2xl',
              !isActive ? 'text-[#343C6A]' : 'text-white',
            )}
          >
            {cardNumber}
          </strong>
          <Icon
            label='Mastercard'
            width={44}
            height={30}
            classNames={cn(
              !isActive ? 'text-[#9199AF]/50' : 'text-[#FFFFFF]/50',
            )}
          >
            {ICON_PATHS[card.type]}
          </Icon>
        </div>
      </div>
    </motion.button>
  )
}
