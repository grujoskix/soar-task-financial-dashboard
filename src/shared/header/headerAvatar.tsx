'use client'

import { useAuth } from '@/context/AuthContext'
import Image from 'next/image'

export const HeaderAvatar = () => {
  const { user } = useAuth()

  if (!user)
    return (
      <div className='order-1 h-9 w-9 animate-pulse rounded-full bg-[#F5F7FA] md:order-4 md:h-[60px] md:w-[60px]' />
    )

  const avatarPlaceholder = () => {
    if (!user.avatar) return '/images/people/default.png'

    if (user.avatar.startsWith('data:image')) return user.avatar

    return `/images/people/${user.avatar}.png`
  }

  return (
    <Image
      src={avatarPlaceholder()}
      width={60}
      height={60}
      alt={user?.name ?? ''}
      title=''
      className='order-1 h-9 w-9 cursor-pointer rounded-full transition-transform active:scale-90 md:order-4 md:h-[60px] md:w-[60px]'
    />
  )
}
