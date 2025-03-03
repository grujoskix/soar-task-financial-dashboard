'use client'

import { Card } from '@/shared/ui/card'
import { CircleIconBtn } from '@/shared/ui/circleIconBtn'
import { Icon } from '@/shared/ui/icon'
import { Subtitle } from '@/shared/ui/subtitle'
import type { User } from '@/types/user'
import { useState } from 'react'
import { TransferForm } from './transferForm'
import { TransferPerson } from './transferPerson'

type Props = {
  users: User[]
}

export const Transfer = ({ users }: Props) => {
  const [activeUID, setActiveUID] = useState<string>(users[0]._id)

  const handleSetActiveUID = (uid: string) => {
    setActiveUID(uid)
  }

  return (
    <div className='flex flex-1 flex-col gap-6 md:gap-8'>
      <Subtitle>Quick Transfer</Subtitle>
      <Card classNames='flex flex-col gap-5 md:gap-8'>
        <div className='flex items-center gap-5 md:gap-6'>
          <div className='flex flex-1 gap-5 md:gap-6'>
            {users.map((user) => (
              <TransferPerson
                key={user._id}
                user={user}
                isActive={user._id === activeUID}
                setActiveUserID={handleSetActiveUID}
              />
            ))}
          </div>
          <CircleIconBtn classNames='bg-white focus:bg-[#F5F7FA] active:bg-[#F5F7FA] md:hover:bg-[#F5F7FA] shadow-xl shadow-[#E7E4E8CC]'>
            <Icon
              label='settings'
              width={9}
              height={15}
              classNames='text-[#718EBF] group-hover:text-[#396AFF] group-focus:text-[#396AFF]'
            >
              <path
                d='M1 1L7.5 7.5L1 14'
                stroke='currentColor'
                strokeWidth='2'
              />
            </Icon>
          </CircleIconBtn>
        </div>
        <div className='flex items-center gap-6'>
          <span className='text-nowrap font-inter font-normal text-[#718EBF] text-xs md:text-base'>
            Write Amount
          </span>
          <TransferForm uid={activeUID} />
        </div>
      </Card>
    </div>
  )
}
