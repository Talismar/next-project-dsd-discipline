import { isAuthenticated } from '@/middlewares/isAuthenticated'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const user = await isAuthenticated(req)

  if (!user) {
    return NextResponse.json(
      {
        message: 'User not authenticated',
      },
      { status: 401 },
    )
  }

  const { password, ...userData } = user

  return NextResponse.json(userData)
}
