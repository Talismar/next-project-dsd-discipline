import { ReactNode } from 'react'

export const metadata = {
  title: 'API DOCS',
  description: 'Books API Documentation',
}

export default function ApiDocsLayout({ children }: { children: ReactNode }) {
  return <div>{children}</div>
}
