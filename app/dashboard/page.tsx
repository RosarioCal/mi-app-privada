'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { supabase } from '@/lib/supabase'

export default function Dashboard() {
  const router = useRouter()

  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')

  const menu = [
    { icono: "📢", titulo: "Consejo local", ruta: "/dashboard/consejo-local" },
    { icono: "📍", titulo: "Sedes", ruta: "/dashboard/sedes" },
    { icono: "👥", titulo: "Grupos de supernumerarias", ruta: "/dashboard/grupos" },
    { icono: "📣", titulo: "Avisos", ruta: "/dashboard/avisos" },
    { icono: "⛪", titulo: "Confesiones", ruta: "/dashboard/confesiones" },
    { icono: "📅", titulo: "Retiros mensuales", ruta: "/dashboard/retiros" },
    { icono: "💻", titulo: "Retiro virtual", ruta: "/dashboard/retiro-virtual" },
    { icono: "📖", titulo: "Cursos de retiro y convivencias", ruta: "/dashboard/cursos" },
    { icono: "👩", titulo: "Directoras", ruta: "/dashboard/directoras" },
    { icono: "🙏", titulo: "El Padre", ruta: "/dashboard/el-padre" },
    { icono: "🤝", titulo: "Cooperadoras", ruta: "/dashboard/cooperadoras" },
    { icono: "📰", titulo: "Noticias digital", ruta: "/dashboard/noticias" },
    { icono: "🙏", titulo: "Oraciones", ruta: "/dashboard/oraciones" },
    { icono: "🎧", titulo: "Audiolibros", ruta: "/dashboard/audiolibros" },
    { icono: "🌐", titulo: "Páginas de interés", ruta: "/dashboard/paginas-interes" },
    { icono: "🔒", titulo: "Política de privacidad", ruta: "/dashboard/privacidad" },
  ]

  useEffect(() => {
    checkUser()
  }, [])

  async function checkUser() {
    const { data } = await supabase.auth.getUser()

    if (!data.user) {
      router.push('/login')
    } else {
      setEmail(data.user.email || '')
      setLoading(false)
    }
  }

  async function logout() {
    await supabase.auth.signOut()
    router.push('/login')
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Cargando...
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gray-100 flex justify-center px-4 py-8">
      <div className="w-full max-w-md">

        <div className="flex flex-col items-center text-center mb-8">
          <Image
            src="/logo.png"
            alt="Genera Impacto"
            width={220}
            height={220}
            className="mb-4 rounded-xl"
          />

          <h1 className="text-3xl font-bold text-gray-700">
            Genera Impacto
          </h1>

          <p className="mt-4 text-sm text-gray-400">
            Bienvenida {email}
          </p>
        </div>

        <div className="space-y-3">
          {menu.map((item) => (
            <Link
              key={item.ruta}
              href={item.ruta}
              className="block rounded-2xl bg-white p-5 shadow-md transition hover:shadow-lg"
            >
              {item.icono} {item.titulo}
            </Link>
          ))}
        </div>

        <button
          onClick={logout}
          className="mt-8 w-full rounded-xl bg-gray-700 py-3 text-white"
        >
          Cerrar sesión
        </button>

      </div>
    </main>
  )
}