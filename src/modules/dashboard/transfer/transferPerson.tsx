'use client'

import type { User } from '@/types/user'
import { cn } from '@/utils/className'
import Image from 'next/image'

type Props = {
  user: User
  isActive: boolean
  setActiveUserID: (uid: string) => void
}

export const TransferPerson = ({ user, isActive, setActiveUserID }: Props) => {
  const handleSetActiveUID = () => {
    setActiveUserID(user._id)
  }

  return (
    <button
      type='button'
      onClick={handleSetActiveUID}
      className='group flex flex-col items-center gap-3 md:gap-3'
    >
      <div className='h-[50px] w-[50px] shrink-0 overflow-hidden rounded-full md:h-[70px] md:w-[70px]'>
        <Image
          src={user.avatar ? `/images/people/${user.avatar}.png` : ''}
          width={70}
          height={70}
          alt={user.name}
          className='h-full w-full object-cover transition-transform group-active:scale-95'
        />
      </div>
      <div
        className={cn(
          'flex flex-col gap-px md:gap-1',
          isActive ? 'font-extrabold' : 'font-normal',
        )}
      >
        <h3 className='whitespace-nowrap font-inter text-[#232323] text-xs md:text-base'>
          {user.name}
        </h3>
        <span className='font-inter text-[#718EBF] text-xs md:text-[15px]'>
          {user.position}
        </span>
      </div>
    </button>
  )
}
