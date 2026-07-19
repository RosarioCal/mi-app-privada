import { ReactNode } from "react"

type Props = {
  children: ReactNode
  onClick?: () => void
  className?: string
}

export default function Button({
  children,
  onClick,
  className = "",
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full
        rounded-xl
        py-3
        font-medium
        transition
        ${className || "bg-slate-700 text-white hover:bg-slate-800"}
      `}
    >
      {children}
    </button>
  )
}