import { Settings } from '@/modules/settings/settings'
import type { PageProps } from '@/types/page'
import type { NextPage } from 'next'

export const dynamic = 'force-dynamic'

const Page: NextPage<PageProps> = async ({ params }: Readonly<PageProps>) => {
  const { uid } = params

  console.log('Settings Page')
  console.log(uid)

  return <Settings />
}

export default Page
