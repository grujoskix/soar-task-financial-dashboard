'use client'

import { cn } from '@/utils/className'
import type { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{ classNames?: string }>

export const Card = ({ classNames, children }: Props) => (
  <div
    className={cn(
      'flex flex-1 rounded-2xl bg-white p-[20px] md:rounded-3xl md:p-[25px]',
      classNames,
    )}
  >
    {children}
  </div>
)
