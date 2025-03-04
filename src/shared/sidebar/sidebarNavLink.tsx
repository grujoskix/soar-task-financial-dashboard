'use client'

import { cn } from '@/utils/className'
import Link from 'next/link'
import type { AnchorHTMLAttributes } from 'react'
import { Icon } from '../ui/icon'
import { ICON_PATHS } from '../ui/iconPaths'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  isActive: boolean
  classNames?: string
}

export const SidebarNavLink = ({
  href = '#',
  isActive,
  classNames,
  ...rest
}: Props) => (
  <Link
    href={`/${href}`}
    {...rest}
    className={cn(
      'group relative flex h-[60px] items-center gap-[26px] pl-10 outline-none',
      classNames,
    )}
  >
    <span
      className={cn(
        'absolute top-0 h-full w-1.5 rounded-r-[10px] bg-[#232323] transition-all',
        isActive ? 'left-0 opacity-100' : '-left-1.5 opacity-0',
      )}
    />
    <Icon
      label={href}
      classNames={cn(
        'md:group-hover:text-[#232323] md:group-hover:fill-[#232323] md:group-focus:text-[#232323] md:group-focus:fill-[#232323]',
        isActive
          ? 'text-[#232323] fill-[#232323]'
          : 'text-[#B1B1B1] fill-[#B1B1B1]',
      )}
    >
      {ICON_PATHS[href]}
    </Icon>
    <span className='font-inter font-medium text-[#718EBF] text-lg capitalize transition-all group-hover:translate-x-1 group-focus:translate-x-1 group-focus:text-[#232323] group-active:text-[#232323] md:group-hover:text-[#232323]'>
      {href.split('_').join(' ')}
    </span>
  </Link>
)
