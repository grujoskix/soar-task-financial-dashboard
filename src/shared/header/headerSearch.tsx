import { Icon } from '../ui/icon'
import { ICON_PATHS } from '../ui/iconPaths'

export const HeaderSearch = () => (
  <label
    htmlFor='search'
    className='group relative order-4 mt-[20px] w-full md:order-1 md:mt-0 md:ml-auto md:max-w-[255px]'
  >
    <Icon
      label='search'
      width={20}
      height={20}
      classNames='absolute top-3 md:top-4 left-[20px] md:left-[25px] w-4 h-4 md:w-[20px] md:h-[20px] cursor-pointer text-[#718EBF] group-hover:text-[#396AFF] group-focus:text-[#396AFF]'
    >
      {ICON_PATHS.search}
    </Icon>
    <input
      type='text'
      id='search'
      placeholder='Search for something'
      className='h-10 w-full rounded-[40px] bg-[#F5F7FA] pr-[20px] pl-[46px] font-inter font-normal text-[#8BA3CB] text-sm outline-none md:h-[50px] md:pr-[25px] md:pl-[60px] md:text-base'
    />
  </label>
)
