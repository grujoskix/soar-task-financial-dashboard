import type { PropsWithChildren } from 'react'

export const Card = ({ children }: PropsWithChildren) => (
  <div className='flex flex-1 rounded-3xl p-6'>{children}</div>
)
