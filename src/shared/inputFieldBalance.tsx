'use client'
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
    placeholder?: string
  }
  register: UseFormRegister<T>
  error?: FieldError
}

export const InputFieldBalance = <T extends FieldValues>({
  config: { type = 'text', name, placeholder = '' },
  register,
  error,
}: Props<T>) => {
  const { ...inputProps } = register(name)

  return (
    <>
      <input
        type={type}
        id={`inp-${name}`}
        autoComplete='off'
        placeholder={placeholder}
        {...inputProps}
        className='flex h-10 flex-1 rounded-[50px] bg-[#EDF1F7] px-3 font-medium text-[#718EBF] text-xs outline-none transition-colors md:h-[50px] md:px-5 md:text-base'
      />
      {error && <InputFieldError error={error.message as string} />}
    </>
  )
}
