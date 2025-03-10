import type { PageProps } from '@/types/page'
import type { NextPage } from 'next'
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

const Page: NextPage<PageProps> = async () => redirect('/dashboard')

export default Page
