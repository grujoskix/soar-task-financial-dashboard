import { Dashboard } from '@/modules/dashboard/dashboard'
import type { PageProps } from '@/types/page'
import type { NextPage } from 'next'

export const dynamic = 'force-dynamic'

const Page: NextPage<PageProps> = async () => {
  return <Dashboard />
}

export default Page
