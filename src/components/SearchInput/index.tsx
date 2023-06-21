import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchInput: React.FC = () => {
  return (
    <label htmlFor="" className="w-full">
      <div className="flex gap-1">
        <input
          className="w-full bg-[#F0F0F0] p-2 outline-[#ecdede]"
          type="text"
        />
        <span className="rounded-md bg-[#8239F2] p-2">
          <FaSearch size={25} className="text-white" />
        </span>
      </div>
    </label>
  )
}

export default SearchInput
