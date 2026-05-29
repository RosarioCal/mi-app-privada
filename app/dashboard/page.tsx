'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function Dashboard() {

  const router = useRouter()

  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')

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
    return <p>Cargando...</p>
  }

  return (
    <div style={{ padding: 40 }}>

      <h1>Dashboard privado</h1>

      <p>Bienvenido:</p>

      <p>{email}</p>

      <br />

      <button onClick={logout}>
        Cerrar sesión
      </button>

    </div>
  )
}