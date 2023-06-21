import { prisma } from '@/lib/prisma'
import { isAuthenticated } from '@/middlewares/isAuthenticated'
import { Prisma } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
import zod from 'zod'

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
    userId: zod.number(),
    bookId: zod.number(),
    comment: zod.string(),
  })

  try {
    const { userId, bookId, comment } = bookSchema.parse(await req.json())
    const books = await prisma.comment.create({
      data: {
        userId,
        bookId,
        comment,
      },
      include: {
        Avaliation: true,
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
