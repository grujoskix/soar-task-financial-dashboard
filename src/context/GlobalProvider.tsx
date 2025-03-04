'use client'

import { AuthProvider } from './AuthContext'
import { CardProvider } from './CardContext'

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <CardProvider>{children}</CardProvider>
    </AuthProvider>
  )
}
