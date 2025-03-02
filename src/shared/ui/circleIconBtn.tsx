import { cn } from '@/utils/className'
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type Props = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & { classNames?: string }
>

export const CircleIconBtn = ({
  onClick,
  children,
  classNames,
  ...rest
}: Props) => (
  <button
    type='button'
    onClick={onClick}
    {...rest}
    className={cn(
      'group flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-[#F5F7FA] outline-none transition-transform focus:bg-[#E6EFF5] active:scale-90 active:bg-[#E6EFF5] md:hover:bg-[#E6EFF5]',
      classNames,
    )}
  >
    {children}
  </button>
)
