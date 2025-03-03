'use client'

import { Icon } from '@/shared/ui/icon'
import { ICON_PATHS } from '@/shared/ui/iconPaths'
import Image from 'next/image'
import { type ChangeEvent, useCallback, useRef } from 'react'

type Props = {
  avatar?: string | null
  setAvatar: (img: string | null) => void
}

export const EditProfileAvatar = ({ avatar, setAvatar }: Props) => {
  const labelRef = useRef<HTMLLabelElement>(null)

  const handleUploadClick = useCallback(() => {
    labelRef?.current?.click()
  }, [])

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const file: File | undefined = event.target.files?.[0]

      if (file) {
        const reader = new FileReader()

        reader.onload = (ev: ProgressEvent<FileReader>) => {
          const base64 = ev.target?.result as string
          setAvatar(base64)
        }
        reader.readAsDataURL(file)
      }
    },
    [setAvatar],
  )

  const avatarUploader = (
    <label ref={labelRef} htmlFor='avatar' className='flex h-full w-full'>
      <input
        type='file'
        id='avatar'
        name='upload'
        accept='image/png,image/jpg,image/jpeg'
        className='hidden'
        onChange={onChange}
      />
    </label>
  )

  const avatarPreview = (
    <Image
      src={avatar ?? ''}
      width={100}
      height={100}
      alt='avatar'
      className='h-full w-full object-cover'
    />
  )

  return (
    <div className='relative flex self-start'>
      <button
        type='button'
        onClick={handleUploadClick}
        className='absolute right-0 bottom-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#232323] transition-transform md:active:scale-100 md:hover:scale-110'
      >
        <Icon label='Avatar' width={15} height={15} classNames='text-white'>
          {ICON_PATHS.edit}
        </Icon>
      </button>
      <div className='flex h-[100px] w-[100px] items-center justify-center overflow-hidden rounded-full bg-[#F5F7FA] md:h-[90px] md:w-[90px]'>
        {avatar && avatarPreview}
        {avatarUploader}
      </div>
    </div>
  )
}
