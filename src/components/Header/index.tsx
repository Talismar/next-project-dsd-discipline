'use client'
import Image from 'next/image'
import React from 'react'
import logoSvg from '../../../public/logo.svg'
import SearchInput from '../SearchInput'
import Link from 'next/link'
import Avatar from '../Avatar'

interface HeaderProps {
  // username: string
  // instagramName: string
  isAuthenticated: boolean
}

function Header({ isAuthenticated }: HeaderProps) {
  return (
    <header className="flex items-center justify-between gap-6 bg-white px-6 py-2">
      <Link href="/">
        <Image
          src={logoSvg}
          alt="logo system"
          className="cursor-pointer"
          priority
        />
      </Link>

      <SearchInput />

      {isAuthenticated ? (
        <section className="flex items-center space-x-4">
          <Avatar />
          <div>
            <p className="whitespace-nowrap font-bold text-[#41414D]">
              Irlan Moreira
            </p>
            <div>
              <span className="whitespace-nowrap text-[#737380]">
                @irlanarley
              </span>
            </div>
          </div>
        </section>
      ) : (
        <button className="mr-8 min-w-[150px] text-right font-bold text-[#8239F2]">
          Login
        </button>
      )}
    </header>
  )
}

export default Header
