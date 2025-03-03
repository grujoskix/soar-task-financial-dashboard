'use client'

import { motion } from 'framer-motion'

export type Props = {
  error: string
}

export const InputFieldError = ({ error }: Props) => (
  <motion.small
    initial={{ opacity: 0, x: -6 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -6 }}
    transition={{ duration: 0.3, ease: 'easeOut' }}
    className='-bottom-4 md:-bottom-5 absolute px-2 font-inter font-normal text-red-600 text-xs md:px-4'
  >
    {error}
  </motion.small>
)
