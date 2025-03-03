export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    signDisplay: 'always',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}
