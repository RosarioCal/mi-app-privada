import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
  titulo: string
  subtitulo?: string
  children: ReactNode
}

export default function PageTemplate({
  titulo,
  subtitulo,
  children,
}: Props) {
  return (
    <main className="min-h-screen bg-gray-100 flex justify-center px-4 py-8">
      <div className="w-full max-w-md">

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800">
            {titulo}
          </h1>

          {subtitulo && (
         <p className="mt-2 text-lg text-gray-600 font-medium">
          {subtitulo}
        </p>
          )}
        </div>

        {children}

        <Link
          href="/dashboard"
          className="mt-8 inline-block rounded-xl bg-slate-700 px-6 py-3 text-white transition hover:bg-slate-800"
        >
          ← Inicio
        </Link>

      </div>
    </main>
  )
}