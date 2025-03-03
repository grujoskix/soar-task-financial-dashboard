import { type Transaction, TransactionActivity } from '@/types/transaction'

export type DailyBalance = {
  deposit: number
  withdraw: number
}

export type DailyBalances = Record<number, DailyBalance>

export const calculateBalances = (transactions: Transaction[]) => {
  let maxAbs = 0

  const dailyBalances: DailyBalances = {
    0: { deposit: 0, withdraw: 0 },
    1: { deposit: 0, withdraw: 0 },
    2: { deposit: 0, withdraw: 0 },
    3: { deposit: 0, withdraw: 0 },
    4: { deposit: 0, withdraw: 0 },
    5: { deposit: 0, withdraw: 0 },
    6: { deposit: 0, withdraw: 0 },
  }

  for (const tx of transactions) {
    const absVal = Math.abs(tx.balance)

    if (absVal > maxAbs) {
      maxAbs = absVal
    }

    const day = new Date(tx.date).getDay()

    if (tx.activity === TransactionActivity.deposit) {
      dailyBalances[day].deposit += tx.balance
    } else if (tx.activity === TransactionActivity.withdraw) {
      dailyBalances[day].withdraw += Math.abs(tx.balance)
    }
  }

  const maxBalance = Math.ceil(maxAbs / 100) * 100

  return { maxBalance, dailyBalances }
}

export const generateSteps = (maxBalance: number): number[] => {
  const steps: number[] = []

  for (let i = 0; i <= maxBalance; i += 100) {
    steps.push(i)
  }

  return steps.reverse()
}

export const getBarHeight = (value: number, maxBalance: number): string => {
  if (maxBalance <= 0) return '0%'

  const ratio = value / maxBalance
  const clampedRatio = Math.min(ratio, 1)

  return `${(clampedRatio * 100).toFixed(0)}%`
}
