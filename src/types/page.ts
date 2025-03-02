import type { ReactNode } from 'react'

export type LayoutProps = {
  children: ReactNode
  params: Record<string, string | string[]>
}

export type PageProps = {
  params: Record<string, string | string[]> & Params
  searchParams: Record<string, string | string[]>
}

export type GenerateMetadataParams = {
  params: Record<string, string | string[]>
}

export type Params = {
  uid?: string // Param for User ID
}
