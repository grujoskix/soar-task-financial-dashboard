'use client'

import { cn } from '@/utils/className'
import type { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  label: string
  width?: number
  height?: number
  stroke?: number
  className?: string
}>

export const Icon = ({
  label,
  width = 25,
  height = 25,
  stroke = 0,
  className,
  children,
}: Props) => (
  <svg
    role='img'
    fill='none'
    width={width}
    height={height}
    aria-label={label}
    strokeWidth={stroke}
    stroke='currentColor'
    viewBox={`0 0 ${width} ${height}`}
    xmlns='http://www.w3.org/2000/svg'
    className={cn('shrink-0 transition-colors', className)}
  >
    {children}
  </svg>
)
