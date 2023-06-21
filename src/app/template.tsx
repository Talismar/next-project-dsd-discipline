'use client'

import { ReactNode } from 'react'

export default function Template({ children }: { children: ReactNode }) {
  // useEffect(() => {
  //   console.log("Template")
  // },[])

  return children
}
