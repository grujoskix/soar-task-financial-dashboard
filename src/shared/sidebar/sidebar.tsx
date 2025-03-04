'use client'

import { usePathname } from 'next/navigation'
import { SidebarBrand } from './sidebarBrand'
import { SidebarNavLink } from './sidebarNavLink'

export const Sidebar = () => {
  const pathname = usePathname()

  return (
    <aside className='-left-[250px] fixed top-0 z-10 h-dvh w-full min-w-[250px] max-w-[250px] bg-white md:relative md:left-0 md:border-[#E6EFF5] md:border-r'>
      <SidebarBrand />

      <nav className='mt-3 flex flex-col gap-1'>
        {navLinks.map((path) => (
          <SidebarNavLink
            key={path}
            href={path}
            isActive={path === pathname.slice(1)}
          />
        ))}
      </nav>
    </aside>
  )
}

const navLinks = [
  'dashboard',
  'transactions',
  'accounts',
  'investments',
  'credit_cards',
  'loans',
  'services',
  'my_privileges',
  'setting',
]
