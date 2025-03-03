'use client'

import { cn } from '@/utils/className'
import dynamic from 'next/dynamic'
import type { HTMLInputTypeAttribute } from 'react'
import type {
  FieldError,
  FieldPath,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form'

const InputFieldError = dynamic(
  () => import('./inputFieldError').then((cmp) => cmp.InputFieldError),
  {
    ssr: false,
  },
)

export type Props<T extends FieldValues> = {
  config: {
    type?: HTMLInputTypeAttribute
    name: FieldPath<T>
    label: string
    placeholder?: string
    disabled?: boolean
    classNames?: string
    inputClassNames?: string
  }
  register: UseFormRegister<T>
  error?: FieldError
}

export const InputField = <T extends FieldValues>({
  config: {
    type = 'text',
    name,
    label,
    placeholder = '',
    disabled,
    classNames,
    inputClassNames,
  },
  register,
  error,
}: Props<T>) => {
  const { ...inputProps } = register(name)

  const inputColorClasses = disabled
    ? 'border-[#DFEAF2]/80 focus:border-[#718EBF]/80 md:hover:border-[#718EBF]/80'
    : 'border-[#DFEAF2] focus:border-[#718EBF] md:hover:border-[#718EBF]/60'

  const inputColorErrorClasses = 'border-red-500 focus:border-red-600'

  return (
    <div
      className={cn('relative flex flex-1 flex-col', classNames)}
      aria-live='polite'
    >
      <label
        htmlFor={`inp-${name}`}
        className='mb-2 font-inter font-medium text-[#232323] text-sm md:mb-3 md:text-base'
      >
        {label}
      </label>
      <input
        type={type}
        id={`inp-${name}`}
        autoComplete='off'
        placeholder={placeholder}
        disabled={disabled}
        {...inputProps}
        className={cn(
          'h-10 w-full rounded-[10px] border bg-white px-3 font-medium text-[#718EBF] text-xs outline-none transition-colors md:h-[50px] md:rounded-2xl md:px-5 md:text-base',
          inputClassNames,
          error ? inputColorErrorClasses : inputColorClasses,
        )}
      />
      {error && <InputFieldError error={error.message as string} />}
    </div>
  )
}
