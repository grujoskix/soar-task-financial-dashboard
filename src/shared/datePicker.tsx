'use client'
// Helper code snippet: https://tailgrids.com/components/datepicker

import { cn } from '@/utils/className'
import { useEffect, useRef, useState } from 'react'
import { CircleIconBtn } from './ui/circleIconBtn'
import { Icon } from './ui/icon'

type Props = {
  birth_date?: Date | null
  setBirthDate: (d: Date | null) => void
}

export const DatePicker = ({ birth_date, setBirthDate }: Props) => {
  const [currentDate, setCurrentDate] = useState<Date>(birth_date || new Date())
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false)

  const wrapperRef = useRef<HTMLDivElement>(null)

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()

    const firstDayOfMonth = (new Date(year, month, 1).getDay() + 6) % 7
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const daysArray: (Date | null)[] = []

    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push(null)
    }

    for (let day = 1; day <= daysInMonth; day++) {
      daysArray.push(new Date(year, month, day))
    }
    return daysArray
  }

  const isSameDay = (d1: Date, d2: Date) =>
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()

  const handleSelectDay = (date: Date) => {
    setBirthDate(date)
    setCurrentDate(date)
    setIsCalendarOpen(false)
  }

  const handlePrevMonth = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1),
    )
  }

  const handleNextMonth = () => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1),
    )
  }

  const toggleCalendar = () => {
    setIsCalendarOpen((prev) => !prev)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsCalendarOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const formattedDate = birth_date
    ? birth_date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    : ''

  return (
    <div className='relative flex flex-1 flex-col' ref={wrapperRef}>
      <label
        htmlFor='datepicker'
        className='mb-2 font-inter font-medium text-[#232323] text-sm md:mb-3 md:text-base'
      >
        Date of Birth
      </label>
      <input
        id='datepicker'
        type='text'
        className='h-10 w-full cursor-pointer rounded-[10px] border border-[#DFEAF2] bg-white px-3 font-medium text-[#718EBF] text-xs outline-none transition-colors focus:border-[#718EBF] md:h-[50px] md:rounded-2xl md:px-5 md:text-base md:hover:border-[#718EBF]/60'
        value={formattedDate}
        readOnly
        onClick={toggleCalendar}
      />
      <Icon
        label='Date of birth'
        width={14}
        height={9}
        classNames={cn(
          'absolute bottom-4 md:bottom-5 right-4 transition-transform',
          { 'rotate-180': isCalendarOpen },
        )}
      >
        <path d='M1 1L7 7L13 1' stroke='#718EBF' strokeWidth='1.5' />
      </Icon>

      <div
        id='datepicker-container'
        className={cn(
          'absolute top-6 left-0 flex w-full flex-col items-center rounded-[10px] border border-[#DFEAF2] bg-white p-4 shadow-four transition-all duration-300 sm:p-[30px] md:top-9 md:rounded-2xl dark:bg-dark-2 dark:shadow-box-dark',
          isCalendarOpen
            ? 'z-20 translate-y-0 opacity-100'
            : '-z-20 translate-y-3 opacity-0',
        )}
      >
        <div className='flex w-full items-center justify-between pb-4'>
          <CircleIconBtn
            onClick={handlePrevMonth}
            classNames='scale-75 md:scale-100'
          >
            <Icon
              label='prev'
              classNames='fill-[#718EBF] group-hover:fill-[#396AFF] group-focus:fill-[#396AFF]'
            >
              <path d='M16.2375 21.4875C16.0125 21.4875 15.7875 21.4125 15.6375 21.225L7.16249 12.6C6.82499 12.2625 6.82499 11.7375 7.16249 11.4L15.6375 2.77498C15.975 2.43748 16.5 2.43748 16.8375 2.77498C17.175 3.11248 17.175 3.63748 16.8375 3.97498L8.96249 12L16.875 20.025C17.2125 20.3625 17.2125 20.8875 16.875 21.225C16.65 21.375 16.4625 21.4875 16.2375 21.4875Z' />
            </Icon>
          </CircleIconBtn>

          <span
            id='currentMonth'
            className='font-inter font-semibold text-[#718EBF] text-lg capitalize md:text-xl'
          >
            {currentDate.toLocaleDateString('en-US', {
              month: 'long',
              year: 'numeric',
            })}
          </span>

          <CircleIconBtn
            onClick={handleNextMonth}
            classNames='scale-75 md:scale-100'
          >
            <Icon
              label='next'
              classNames='fill-[#718EBF] group-hover:fill-[#396AFF] group-focus:fill-[#396AFF]'
            >
              <path d='M7.7625 21.4875C7.5375 21.4875 7.35 21.4125 7.1625 21.2625C6.825 20.925 6.825 20.4 7.1625 20.0625L15.0375 12L7.1625 3.97498C6.825 3.63748 6.825 3.11248 7.1625 2.77498C7.5 2.43748 8.025 2.43748 8.3625 2.77498L16.8375 11.4C17.175 11.7375 17.175 12.2625 16.8375 12.6L8.3625 21.225C8.2125 21.375 7.9875 21.4875 7.7625 21.4875Z' />
            </Icon>
          </CircleIconBtn>
        </div>

        <div className='flex w-full max-w-[380px] flex-col items-center'>
          <div className='grid w-full grid-cols-7 justify-between text-center font-medium text-body-color text-sm capitalize sm:text-lg dark:text-dark-6'>
            {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day) => (
              <span
                key={day}
                className='flex h-[38px] w-[38px] items-center justify-center font-semibold text-[#718EBF] text-inter md:h-[46px] md:w-[47px]'
              >
                {day}
              </span>
            ))}
          </div>

          <div className='grid w-full grid-cols-7 text-center font-medium text-sm sm:text-lg'>
            {generateCalendarDays().map((date, i) => {
              if (!date) {
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                return <div key={`d-${i}`} className='mb-2' />
              }
              const isActive = birth_date ? isSameDay(date, birth_date) : false
              return (
                <button
                  key={date.getDate()}
                  type='button'
                  onClick={() => handleSelectDay(date)}
                  className={cn(
                    'mb-2 flex h-[38px] w-[38px] items-center justify-center rounded-[7px] bg-[#F5F7FA] text-[#232323] text-inter text-sm outline-none transition-transform active:scale-90 active:bg-[#E6EFF5]/0 md:h-[46px] md:w-[47px] md:active:bg-[#E6EFF5]/15 md:hover:bg-[#E6EFF5]/30',
                    { 'bg-[#E6EFF5]/0 text-[#232323]': isActive },
                  )}
                >
                  {date.getDate()}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
