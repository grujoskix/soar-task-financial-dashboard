import { Icon } from '@/shared/ui/icon'
import { ICON_PATHS } from '@/shared/ui/iconPaths'
import { type Transaction, TransactionType } from '@/types/transaction'
import { cn } from '@/utils/className'
import { formatCurrency } from '@/utils/formatCurrency'

type Props = {
  transaction: Transaction
}

export const TransactionItem = ({ transaction }: Props) => {
  const formattedDate = transaction.date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className='flex items-center gap-4'>
      <div
        className={cn(
          'flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full md:h-[55px] md:w-[55px]',
          TRANSACTION_COLOR[transaction.type],
        )}
      >
        <Icon
          label={transaction.type}
          width={28}
          height={28}
          classNames={TRANSACTION_ICON_COLOR[transaction.type]}
        >
          {ICON_PATHS[transaction.type]}
        </Icon>
      </div>
      <div className='grid w-full grid-cols-1 gap-0.5 md:gap-1'>
        <h3 className='truncate font-inter font-medium text-[#232323] text-sm md:text-base'>
          {TRANSACTION_NAME[transaction.type]}
        </h3>
        <span className='font-lato font-normal text-[#718EBF] text-xs transition-colors md:text-[15px]'>
          {formattedDate}
        </span>
      </div>
      <strong
        className={cn(
          'font-inter font-medium text-sm md:text-base',
          transaction.balance < 0 ? 'text-[#FF4B4A]' : 'text-[#41D4A8]',
        )}
      >
        {formatCurrency(transaction.balance)}
      </strong>
    </div>
  )
}

const TRANSACTION_NAME: Record<TransactionType, string> = {
  [TransactionType.deposit_from]: 'Deposit from my Card',
  [TransactionType.deposit_paypal]: 'Deposit Paypal',
  [TransactionType.deposit_person]: 'Jemi Wilson',
}

const TRANSACTION_COLOR: Record<TransactionType, string> = {
  [TransactionType.deposit_from]: 'bg-[#FFF5D9]',
  [TransactionType.deposit_paypal]: 'bg-[#E7EDFF]',
  [TransactionType.deposit_person]: 'bg-[#DCFAF8]',
}

const TRANSACTION_ICON_COLOR: Record<TransactionType, string> = {
  [TransactionType.deposit_from]: 'text-[#FFBB38]',
  [TransactionType.deposit_paypal]: 'text-[#396AFF]',
  [TransactionType.deposit_person]: 'text-[#16DBCC]',
}
