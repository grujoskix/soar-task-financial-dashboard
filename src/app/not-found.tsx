import { Card } from '@/shared/ui/card'
import Link from 'next/link'

const NotFound = () => (
  <Card classNames='flex-col gap-4 md:gap-6 justify-center items-center'>
    <h1 className='font-extrabold font-inter text-3xl text-[#343C6A] transition-colors md:text-5xl'>
      <span className='opacity-60'>404</span> Lost in Space?
    </h1>
    <p className='text-center text-[#718EBF] text-base md:text-lg'>
      This page is off exploring the galaxy. <br /> Let's bring you back to
      Earth 🚀
    </p>
    <Link
      href='/dashboard'
      className='flex h-10 w-full items-center justify-center rounded-[9px] bg-[#232323] font-inter font-medium text-base text-white outline-none transition-all hover:bg-[#232323]/80 focus:bg-[#232323]/80 active:scale-95 active:bg-[#232323]/80 disabled:pointer-events-none disabled:opacity-65 md:h-[50px] md:max-w-[190px] md:rounded-2xl md:text-lg'
    >
      RETURN HOME
    </Link>
  </Card>
)

export default NotFound
