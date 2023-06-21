import React from 'react'

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  //
}

const Input: React.FC<InputProps> = ({ ...rest }) => {
  return (
    <input
      className="rounded-md border-2 border-gray-400 p-2 pl-3 text-xl"
      {...rest}
    />
  )
}

export default Input
