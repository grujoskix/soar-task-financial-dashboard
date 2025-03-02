import { Icon } from '../ui/icon'
import { ICON_PATHS } from '../ui/iconPaths'

export const HeaderHamburger = () => (
  <button
    type='button'
    className='flex h-9 w-9 items-center justify-center outline-none md:hidden'
  >
    <Icon
      label='Mobile Menu'
      width={18}
      height={14}
      classNames='text-[#343C6A]'
    >
      {ICON_PATHS.hamburger}
    </Icon>
  </button>
)
