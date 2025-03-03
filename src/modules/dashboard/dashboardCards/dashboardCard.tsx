'use client'

import { Icon } from '@/shared/ui/icon'
import { ICON_PATHS } from '@/shared/ui/iconPaths'
import { cn } from '@/utils/className'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {
  isActive?: boolean
}

export const DashboardCard = ({ isActive }: Props) => (
  <motion.button
    type='button'
    whileHover={{ scale: 1.05 }}
    whileFocus={{ scale: 1.05 }}
    whileTap={{ scale: 1 }}
    transition={{ duration: 0.2 }}
    className='w-full outline-none'
  >
    <div
      className={cn(
        'flex flex-1 flex-col gap-1 overflow-hidden rounded-2xl transition-colors duration-200 md:gap-2 md:rounded-3xl',
        !isActive
          ? 'border border-[#DFEAF2] bg-white'
          : 'bg-gradient-to-r from-[#5B5A6F] to-[#000000]',
      )}
    >
      <div className='flex flex-col gap-6 p-6 md:gap-8'>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col'>
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
              $5,756
            </strong>
          </div>
          <Image
            src={`/images/chip-card-${!isActive ? 'dark' : 'light'}.png`}
            width={35}
            height={35}
            className='h-auto w-auto'
            alt='Card Chip'
          />
        </div>
        <div className='flex items-center gap-12'>
          <div className='flex flex-col'>
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
              Eddy Cusuma
            </strong>
          </div>
          <div className='flex flex-col'>
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
              12/22
            </strong>
          </div>
        </div>
      </div>
      <div
        className={cn(
          'flex items-center justify-between p-6 transition-colors',
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
          3778 **** **** 1234
        </strong>
        <Icon
          label='Mastercard'
          width={44}
          height={30}
          classNames={cn(!isActive ? 'text-[#9199AF]/50' : 'text-[#FFFFFF]/50')}
        >
          {ICON_PATHS.mastercard}
        </Icon>
      </div>
    </div>
  </motion.button>
)
