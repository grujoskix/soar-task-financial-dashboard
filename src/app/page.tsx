import type { PageProps } from '@/types/page'
import type { NextPage } from 'next'

export const dynamic = 'force-dynamic'

const Page: NextPage<PageProps> = async () => {
  return <h1>DASHBOARD PAGE</h1>
}

export default Page
