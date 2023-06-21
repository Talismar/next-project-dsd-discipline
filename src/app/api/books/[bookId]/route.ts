import { prisma } from '@/lib/prisma'
import { isAuthenticated } from '@/middlewares/isAuthenticated'
import { Prisma } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

interface IRequestParams {
  params: {
    bookId: string
  }
}

export async function GET(
  req: NextRequest,
  { params: { bookId } }: IRequestParams,
) {
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
    const book = await prisma.book.findFirst({
      where: {
        id: Number(bookId),
      },
      include: {
        author: true,
        comments: true,
        _count: true,
      },
    })
    return NextResponse.json(book)
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return NextResponse.json(
        { message: 'Prisma error', issues: error.message },
        { status: 400 },
      )
    }
  }
}
