'use client'

import { cardService } from '@/services/cardService'
import type { BankCard } from '@/types/card'
import {
  BankCardTransactionActivity,
  BankCardTransactionPurpose,
  BankCardTransactionType,
} from '@/types/transaction'
import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

interface CardContextType {
  cards: BankCard[]
  activeCardIdx: number
  fetchCards: () => Promise<void>
  setActiveCardIdx: (idx: number) => void
  updateCardBalance: (idx: number, balance: number) => void
}

const CardContext = createContext<CardContextType | undefined>(undefined)

export const CardProvider = ({ children }: { children: ReactNode }) => {
  const [cards, setCards] = useState<BankCard[]>([])
  const [activeCardIdx, setActiveCardIdx] = useState<number>(0)

  const fetchCards = async () => {
    const cardsMockData = await cardService.fetchCards()
    setCards(cardsMockData)
  }

  const updateCardBalance = (idx: number, balance: number) => {
    setCards((prevCards) =>
      prevCards.map((card, i) => {
        const updatedTransactions = [...card.transactions]

        updatedTransactions.push({
          _id: '10',
          date: new Date(),
          type: BankCardTransactionType.withdraw,
          activity: BankCardTransactionActivity.deposit_from,
          purpose: BankCardTransactionPurpose.others,
          balance,
        })

        return i === idx
          ? {
              ...card,
              balance: card.balance - balance,
              transactions: updatedTransactions,
            }
          : card
      }),
    )
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: Must run only once
  useEffect(() => {
    fetchCards()
  }, [])

  return (
    <CardContext.Provider
      value={{
        cards,
        activeCardIdx,
        fetchCards,
        setActiveCardIdx,
        updateCardBalance,
      }}
    >
      {children}
    </CardContext.Provider>
  )
}

export const useCards = () => {
  const context = useContext(CardContext)
  if (!context) throw new Error('useCards must be used within a CardProvider')
  return context
}
