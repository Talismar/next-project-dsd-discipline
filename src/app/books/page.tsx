// import axios, { AxiosError } from 'axios'
import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link'

export default async function Books() {
  // const data = await getData()
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
          {Array.from(Array(24).keys()).map((item) => {
            return (
              <Link
                href={`/books/${item}/`}
                className="relative h-[226px] w-[148px] cursor-pointer bg-[#D9D9D9]"
                key={item}
              >
                {/* <Image src={data.image_url} alt="" fill /> */}
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

// async function getData() {
//   try {
//     await later()
//     const response = await axios.get('http://localhost:3000/api/books/1')
//     return response.data
//   } catch (error) {
//     if (error instanceof AxiosError) {
//       // console.log(error.response.data)
//     }
//   }
// }
