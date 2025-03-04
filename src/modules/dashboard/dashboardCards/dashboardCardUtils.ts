export const formatCardExpiryDate = (date: Date): string => {
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear().toString().slice(-2)

  return `${month}/${year}`
}

export const maskCardNumber = (cardNumber: number): string => {
  const cardStr = cardNumber.toString()
  const first4 = cardStr.slice(0, 4)
  const last4 = cardStr.slice(-4)

  return `${first4} **** **** ${last4}`
}
