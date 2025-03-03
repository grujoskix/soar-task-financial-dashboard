'use client'

import { Card } from '@/shared/ui/card'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { EditProfileForm } from './editProfile/editProfileForm'

export const Settings = () => {
  const [activeTab, setActiveTab] = useState(tabs[0])

  return (
    <Card classNames='flex-col'>
      <div className='flex flex-1 gap-2 border-[#F4F5F7] border-b md:gap-[40px]'>
        {tabs.map((tab) => (
          <button
            key={tab}
            type='button'
            onClick={() => setActiveTab(tab)}
            className='group relative flex flex-1 justify-center p-3 outline-none md:flex-initial md:justify-start'
          >
            {activeTab === tab && (
              <motion.div
                layoutId='border'
                className='absolute bottom-0 left-0 h-[3px] w-full rounded-t-[10px] bg-white text-black mix-blend-difference'
                transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
              />
            )}
            <span className='font-inter font-medium text-[#718EBF] text-sm capitalize transition-colors group-focus:text-[#232323] group-active:text-[#232323] md:text-base md:group-hover:text-[#232323]'>
              {tab.split('_').join(' ')}
            </span>
          </button>
        ))}
      </div>

      <EditProfileForm />
    </Card>
  )
}

const tabs = ['edit_profile', 'preferences', 'security']
