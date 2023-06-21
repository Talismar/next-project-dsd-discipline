import React, { ReactNode } from 'react'
import classNames from 'classnames'

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode
  variant: 'primary' | 'secondary' | 'secondary_outline'
}

const Button: React.FC<ButtonProps> = ({ children, variant, ...rest }) => {
  const btnClass = classNames({
    'bg-[#8239F2] text-white': variant === 'primary',
    'bg-[#43E8BE] text-white': variant === 'secondary',
    'text-[#43E8BE]': variant === 'secondary_outline',
  })
  console.log(btnClass)
  return (
    <button
      className={'min-w-[26rem] rounded-md py-3 text-lg font-bold ' + btnClass}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
