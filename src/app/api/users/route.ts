import { prisma } from '@/lib/prisma'
import { isAuthenticated } from '@/middlewares/isAuthenticated'
import { Prisma } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
import zod from 'zod'

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

  try {
    const users = await prisma.user.findMany()
    return NextResponse.json(users)
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

export async function POST(req: Request) {
  const userSchema = zod.object({
    name: zod.string(),
    email: zod.string().email(),
    password: zod.string(),
  })

  try {
    const { name, password, email } = userSchema.parse(await req.json())

    const response = await prisma.user.create({
      data: {
        name,
        email,
        password,
        image_url: 'https://source.unsplash.com/random?a=1',
      },
    })
    return NextResponse.json(response)
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

    return NextResponse.json({})
  }
}
