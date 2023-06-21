'use client'
import SwaggerUI from 'swagger-ui-react'

export default function SwaggerComponent({ spec }: any) {
  return <SwaggerUI spec={spec} />
}
