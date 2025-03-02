import { cn } from '@/utils/className'
import type { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  classNames?: string
}>

export const Title = ({ classNames, children }: Props) => (
  <h1
    className={cn(
      'font-inter font-semibold text-[#343C6A] text-xl md:text-3xl',
      classNames,
    )}
  >
    {children}
  </h1>
)
