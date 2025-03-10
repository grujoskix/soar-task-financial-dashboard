import { CircleIconBtn } from '../ui/circleIconBtn'
import { Icon } from '../ui/icon'
import { ICON_PATHS } from '../ui/iconPaths'
import { Title } from '../ui/title'
import { HeaderAvatar } from './headerAvatar'
import { HeaderHamburger } from './headerHamburger'
import { HeaderSearch } from './headerSearch'

export const Header = () => (
  <header className='flex flex-1 grow-0 bg-white pt-6 pb-[20px] md:border-[#E6EFF5] md:border-b md:py-[20px]'>
    <div className='mx-6 flex flex-1 flex-wrap items-center justify-between md:mx-10 md:justify-normal md:gap-8'>
      <HeaderHamburger />

      <Title>Overview</Title>

      <HeaderSearch />

      <CircleIconBtn classNames='hidden md:flex md:order-2'>
        <Icon
          label='settings'
          classNames='text-[#718EBF] group-hover:text-[#396AFF] group-focus:text-[#396AFF]'
        >
          {ICON_PATHS.settings}
        </Icon>
      </CircleIconBtn>
      <CircleIconBtn classNames='hidden md:flex md:order-3'>
        <Icon
          label='notifications'
          classNames='text-[#718EBF] group-hover:text-[#396AFF] group-focus:text-[#396AFF]'
        >
          {ICON_PATHS.notifications}
        </Icon>
      </CircleIconBtn>

      <HeaderAvatar />
    </div>
  </header>
)
