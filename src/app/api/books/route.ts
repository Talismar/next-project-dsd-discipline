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
    const books = await prisma.book.findMany()
    return NextResponse.json(books)
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return NextResponse.json(
        { message: 'Prisma error', issues: error.message },
        { status: 400 },
      )
    }
  }
}

export async function POST(req: NextRequest) {
  const user = await isAuthenticated(req)

  if (!user) {
    return NextResponse.json(
      {
        message: 'User not authenticated',
      },
      { status: 401 },
    )
  }

  const bookSchema = zod.object({
    title: zod.string(),
    description: zod.string(),
    authorId: zod.number(),
  })

  try {
    const { title, description, authorId } = bookSchema.parse(await req.json())
    const books = await prisma.book.create({
      data: {
        title,
        description,
        authorId,
        image_url: 'https://source.unsplash.com/random?a=10',
      },
    })
    return NextResponse.json(books)
  } catch (error) {
    if (error instanceof zod.ZodError) {
      return NextResponse.json(
        { message: 'Validation error.', issues: error.format() },
        { status: 400 },
      )
    }

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return NextResponse.json(
        { message: 'Prisma error.', issues: error.message },
        { status: 400 },
      )
    }
  }
}
