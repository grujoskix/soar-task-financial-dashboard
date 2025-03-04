import { type Transaction, TransactionPurpose } from '@/types/transaction'
import type { Statistics } from './statisticsTypes'

const PURPOSE_COLORS: Record<TransactionPurpose, string> = {
  [TransactionPurpose.entertainment]: '#343C6A',
  [TransactionPurpose.bill_expense]: '#FC7900',
  [TransactionPurpose.investment]: '#396AFF',
  [TransactionPurpose.others]: '#232323',
}

export const getStatisticsData = (
  transactions: Transaction[],
): Statistics[] => {
  const map = new Map<TransactionPurpose, number>()

  for (const tx of transactions) {
    const amount = Math.abs(tx.balance)
    const current = map.get(tx.purpose) || 0
    map.set(tx.purpose, current + amount)
  }

  const statistics: Statistics[] = []

  for (const [purpose, total] of map.entries()) {
    statistics.push({
      label: purpose,
      value: total,
      color: PURPOSE_COLORS[purpose] || '#232323',
    })
  }

  return statistics
}
