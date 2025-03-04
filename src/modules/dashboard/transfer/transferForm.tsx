'use client'

import { useCards } from '@/context/CardContext'
import { InputFieldBalance } from '@/shared/inputFieldBalance'
import { Icon } from '@/shared/ui/icon'
import { ICON_PATHS } from '@/shared/ui/iconPaths'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  type TransferFormSchema,
  transferFormSchema,
} from './transferFormSchema'

export const TransferForm = () => {
  const { activeCardIdx, updateCardBalance } = useCards()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TransferFormSchema>({
    resolver: zodResolver(transferFormSchema),
    mode: 'onSubmit',
  })

  const onSubmit = async (formData: TransferFormSchema) => {
    updateCardBalance(activeCardIdx, Number(formData.balance))
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='relative flex flex-1'
      autoComplete='off'
    >
      <InputFieldBalance
        config={{
          type: 'tel',
          name: 'balance',
          placeholder: '525.50',
        }}
        register={register}
        error={errors.balance}
      />
      <button
        type='submit'
        disabled={isSubmitting}
        className='absolute top-0 right-0 z-10 flex h-10 w-[100px] items-center justify-center gap-2 rounded-[50px] bg-[#232323] outline-none transition-all hover:bg-[#232323]/80 focus:bg-[#232323]/80 active:scale-95 active:bg-[#232323]/80 disabled:pointer-events-none disabled:opacity-65 md:h-[50px] md:w-[125px] md:max-w-[190px] md:gap-3'
      >
        <span className='font-inter font-medium text-base text-white md:text-lg'>
          Send
        </span>
        <Icon label='send' width={26} height={23} classNames='text-white'>
          {ICON_PATHS.send}
        </Icon>
      </button>
    </form>
  )
}
