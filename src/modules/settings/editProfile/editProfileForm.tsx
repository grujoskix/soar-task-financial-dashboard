import { DatePicker } from '@/shared/datePicker'
import { InputField } from '@/shared/inputField'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { EditProfileAvatar } from './editProfileAvatar'
import {
  type ProfileFormSchema,
  profileFormSchema,
} from './editProfileFormSchema'

type Props = {
  user?: ProfileFormSchema
  // TODO: Use user profile returned to edit
  // user?: ProfileToEditResponse
}

export const EditProfileForm = ({ user }: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormSchema>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      avatar: user?.avatar ?? null,
      name: user?.name ?? '',
      username: user?.username ?? '',
      email: user?.email ?? '',
      password: user?.password ?? '',
      birth_date: user?.birth_date ?? null,
      address_present: user?.address_present ?? '',
      address_permanent: user?.address_permanent ?? '',
      city: user?.city ?? '',
      country: user?.country ?? '',
      code: user?.code ?? '',
    },
    mode: 'onSubmit',
  })

  const avatar = watch('avatar')
  const birthDate = watch('birth_date')

  const onSubmit = async (formData: ProfileFormSchema) => {
    console.log(formData)

    // TODO: Proceed with API call & error handling
    // const { error } = await actionUpdateProfile(uid, formData)

    // if (error) {
    //   console.log(error.message)
    //   return
    // }
  }

  const handleSetAvatar = useCallback(
    (avatar: string | null) => {
      setValue('avatar', avatar)
    },
    [setValue],
  )

  const handleSetBirthDate = useCallback(
    (birth_date: Date | null) => {
      setValue('birth_date', birth_date)
    },
    [setValue],
  )

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='mt-10 flex flex-col gap-6 md:gap-14'
      autoComplete='off'
    >
      <div className='flex flex-1 flex-col gap-4 md:flex-row md:gap-6'>
        <div className='flex justify-center md:basis-40 md:justify-start'>
          <EditProfileAvatar avatar={avatar} setAvatar={handleSetAvatar} />
        </div>
        <div className='flex flex-1 flex-col gap-4 md:gap-6'>
          <InputField
            config={{
              name: 'name',
              label: 'Your Name',
            }}
            register={register}
            error={errors.name}
          />
          <InputField
            config={{
              type: 'email',
              name: 'email',
              label: 'Email',
            }}
            register={register}
            error={errors.email}
          />
          <DatePicker
            birth_date={birthDate}
            setBirthDate={handleSetBirthDate}
          />
          <InputField
            config={{
              name: 'address_permanent',
              label: 'Permanent Address',
            }}
            register={register}
            error={errors.address_permanent}
          />
          <InputField
            config={{
              type: 'tel',
              name: 'code',
              label: 'Postal Code',
            }}
            register={register}
            error={errors.code}
          />
        </div>
        <div className='flex flex-1 flex-col gap-4 md:gap-6'>
          <InputField
            config={{
              name: 'username',
              label: 'User Name',
            }}
            register={register}
            error={errors.username}
          />
          <InputField
            config={{
              type: 'password',
              name: 'password',
              label: 'Password',
            }}
            register={register}
            error={errors.password}
          />
          <InputField
            config={{
              name: 'address_present',
              label: 'Present Address',
            }}
            register={register}
            error={errors.address_present}
          />
          <InputField
            config={{
              name: 'city',
              label: 'City',
            }}
            register={register}
            error={errors.city}
          />
          <InputField
            config={{
              name: 'country',
              label: 'Country',
            }}
            register={register}
            error={errors.country}
          />
        </div>
      </div>
      <button
        type='submit'
        disabled={isSubmitting}
        className='ml-auto h-10 w-full rounded-[9px] bg-[#232323] font-inter font-medium text-base text-white outline-none transition-all hover:bg-[#232323]/80 focus:bg-[#232323]/80 active:scale-95 active:bg-[#232323]/80 disabled:pointer-events-none disabled:opacity-65 md:h-[50px] md:max-w-[190px] md:rounded-2xl md:text-lg'
      >
        Save
      </button>
    </form>
  )
}
