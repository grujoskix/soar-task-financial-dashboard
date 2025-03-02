import { cn } from '@/utils/className'
import type { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  classNames?: string
}>

export const Subtitle = ({ classNames, children }: Props) => (
  <h2
    className={cn(
      'font-inter font-semibold text-[#343C6A] text-base md:text-2xl',
      classNames,
    )}
  >
    {children}
  </h2>
)
