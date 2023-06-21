import { prisma } from '@/lib/prisma'
import { NextRequest } from 'next/server'

export async function isAuthenticated(request: NextRequest) {
  const password = request.cookies.get('@BookApp/UserPassword')?.value
  const email = request.cookies.get('@BookApp/UserEmail')?.value

  const user = await prisma.user.findFirst({
    where: {
      password,
      email,
    },
    include: {
      Book: true,
      Comment: {
        include: {
          Avaliation: true,
        },
      },
    },
  })

  if (!user) {
    return false
  }

  return user
}
