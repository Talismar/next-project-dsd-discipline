// import axios, { AxiosError } from 'axios'
import { apiClient } from '@/lib/axiosConfig'
import Head from 'next/head'
import Image from 'next/image'
// import Image from 'next/image'
import Link from 'next/link'

type BookTypes = {
  id: number
  title: string
  author: string
  abstract: string
  image: string
  users: number[]
  comments: number[]
}

export default async function Books() {
  const data = await getData()

  return (
    <>
      <Head>
        <title>Books</title>
      </Head>
      <main className="mx-16 mt-16 flex min-h-[48rem] flex-col rounded-md bg-white p-8">
        <h1 className="text-5xl font-bold text-[#8239F2]">
          Encontre as melhores indicações de livros
        </h1>

        <section className="mt-8 flex flex-wrap gap-8">
          {data?.map((item) => {
            return (
              <Link
                href={`/books/${item.id}/`}
                className="relative h-[226px] w-[148px] cursor-pointer bg-[#D9D9D9]"
                key={item.id}
              >
                <Image src={item.image} alt="" fill />
              </Link>
            )
          })}
        </section>
      </main>
    </>
  )
}

// function later(delay = 3000) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, delay)
//   })
// }

async function getData(): Promise<BookTypes[] | null> {
  try {
    // await later()
    const response = await apiClient.get('/books')
    return response.data
  } catch (error) {
    return null
  }
}
