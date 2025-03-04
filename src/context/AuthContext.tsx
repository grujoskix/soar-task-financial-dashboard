'use client'

import type { ProfileFormSchema } from '@/modules/settings/editProfile/editProfileFormSchema'
import { authService } from '@/services/authService'
import type { User } from '@/types/user'
import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

interface AuthContextType {
  user: User | null
  people: User[]
  fetchUser: () => Promise<void>
  fetchPeople: () => Promise<void>
  updateUser: (user: ProfileFormSchema) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [people, setPeople] = useState<User[]>([])

  const fetchUser = async () => {
    const userMockData = await authService.fetchUser()
    setUser(userMockData)
  }

  const fetchPeople = async () => {
    const peopleMockData = await authService.fetchPeople()
    setPeople(peopleMockData)
  }

  const updateUser = (formData: ProfileFormSchema) => {
    setUser((prevUser) => (prevUser ? { ...prevUser, ...formData } : null))
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: Must run only once
  useEffect(() => {
    fetchUser()
    fetchPeople()
  }, [])

  return (
    <AuthContext.Provider
      value={{ user, people, fetchUser, fetchPeople, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within an AuthProvider')
  return context
}
