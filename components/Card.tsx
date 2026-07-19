import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function Card({ children }: Props) {
  return (
    <div className="
      rounded-2xl
      bg-white
      p-5
      shadow-sm
      border
      border-gray-100
      hover:shadow-lg
      transition
      duration-200
    ">
      {children}
    </div>
  )
}