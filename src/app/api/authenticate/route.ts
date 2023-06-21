import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
import zod from 'zod'

export async function POST(req: NextRequest) {
  const authenticateSchema = zod.object({
    email: zod.string().email(),
    password: zod.string(),
  })

  try {
    const { password, email } = authenticateSchema.parse(await req.json())

    const user = await prisma.user.findFirst({
      where: {
        email,
        password,
      },
    })

    if (!user) {
      return NextResponse.json(
        {
          message: 'User not found',
        },
        {
          status: 401,
        },
      )
    }

    const newHeaders = new Headers(req.headers)
    newHeaders.set(
      'Set-Cookie',
      `@BookApp/UserEmail=${user.email};@BookApp/UserPassword=${user.password};`,
    )

    return NextResponse.json(
      {
        message: 'Authentication successful',
      },
      {
        status: 200,
        headers: newHeaders,
      },
    )
  } catch (error) {
    if (error instanceof zod.ZodError) {
      return NextResponse.json(
        { message: 'Validation error.', issues: error.format() },
        { status: 400 },
      )
    }

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return NextResponse.json(
        { message: 'Validation error.', issues: error.message },
        { status: 400 },
      )
    }
  }
}
