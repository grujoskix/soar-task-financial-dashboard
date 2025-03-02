import Image from 'next/image'
import Link from 'next/link'

export const SidebarBrand = () => (
  <Link
    href='/'
    className='flex h-[100px] items-center gap-[10px] pl-10 outline-none'
  >
    <Image src='/soar-task.svg' width={35} height={35} alt='Soar Task' />
    <span className='font-extrabold font-inter text-2xl text-[#343C6A]'>
      Soar Task
    </span>
  </Link>
)
