import Avatar from '@/components/Avatar'
import { apiClient } from '@/lib/axiosConfig'
import { AxiosError } from 'axios'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'
import { AiFillStar, AiFillHeart } from 'react-icons/ai'
import { TbPointFilled } from 'react-icons/tb'

interface BookDetailProps {
  params: {
    bookId: string
  }
}

type BookTypes = {
  id: number
  title: string
  author: string
  abstract: string
  image: string
  users: number[]
  comments: number[]
}

export const metadata: Metadata = {
  title: 'Book Details',
}

const BookDetail: React.FC<BookDetailProps> = async ({
  params: { bookId },
}) => {
  const data = await getDatas(bookId)

  return (
    <main className="mx-16 mt-16 flex min-h-[48rem] space-x-8 rounded-md bg-white p-8">
      <section className=" min-w-[200px]">
        <div className="relative h-[296px] cursor-pointer bg-[#D9D9D9]">
          {data?.image && (
            <Image src={data?.image} fill alt={data?.title || 'Alt'} />
          )}
        </div>
        <strong className="mt-1 block text-xl font-semibold text-[#8239F2]">
          {data?.title}
        </strong>
        {/* <p>Lorem ipsum dolor sit amet</p> */}
        <span className="text-[#008FCC]">{data?.author}</span>

        <div className="mt-2 flex gap-1">
          <AiFillStar size={32} className="text-[#F8C615]" />
          <AiFillStar size={32} className="text-[#F8C615]" />
          <AiFillStar size={32} className="text-[#F8C615]" />
          <AiFillStar size={32} className="text-[#D9D9D9]" />
          <AiFillStar size={32} className="text-[#D9D9D9]" />
        </div>

        <button className="mt-3 w-full rounded-md bg-[#43E8BE] px-3 py-2 text-white">
          Adicionar à biblioteca
        </button>
      </section>

      <section className="flex flex-col space-y-4">
        <h1 className="text-5xl font-bold text-[#8239F2]">{data?.title}</h1>

        <div className="flex items-center space-x-4">
          <span className="block rounded-2xl bg-[#009933] p-4 text-2xl text-white">
            4.5
          </span>
          <p className="text-2xl">93 avaliações</p>
        </div>

        <div className="flex items-center space-x-7">
          <span>{data?.author}</span>
          <TbPointFilled size={12} />
          <span>8 Jan 21</span>
        </div>

        <p>{data?.abstract}</p>

        <div className="flex flex-col gap-7 pt-16">
          <h4 className="">Comentários</h4>

          <div className="flex space-x-4">
            <Avatar />

            <div className="rounded-2xl bg-[#F0F2F5] p-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas sagittis a augue sit amet auctor. Integer eget gravida
                nibh, vel feugiat nibh. Aenean malesuada, mi non maximus
                bibendum, magna lorem vulputate mauris, at rhoncus risus urna eu
                nibh. In sed tellus tellus. Suspendisse nulla augue, tempor sit
                amet ex vel, lobortis varius sapien. Phasellus in tristique
                felis. Phasellus blandit augue.
              </p>

              <div className="flex items-center space-x-2 text-[#D11A1A]">
                <AiFillHeart size={20} />
                <span className="text-base">gostei (12)</span>
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <Avatar />

            <div className="rounded-2xl bg-[#F0F2F5] p-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas sagittis a augue sit amet auctor. Integer eget gravida
                nibh, vel feugiat nibh. Aenean malesuada, mi non maximus
                bibendum, magna lorem vulputate mauris, at rhoncus risus urna eu
                nibh. In sed tellus tellus. Suspendisse nulla augue, tempor sit
                amet ex vel, lobortis varius sapien. Phasellus in tristique
                felis. Phasellus blandit augue.
              </p>

              <div className="flex items-center space-x-2 text-[#D11A1A]">
                <AiFillHeart size={20} />
                <span className="text-base">gostei (12)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default BookDetail

async function getDatas(bookId: string): Promise<BookTypes | null> {
  try {
    const response = await apiClient.get(`/books/${bookId}`)
    return response.data
  } catch (error) {
    const errors = error as AxiosError
    return null
  }
}
