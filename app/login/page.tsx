'use client'
import { supabase } from '@/lib/supabase'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function login() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      alert(error.message)
    } else {
      router.push('/dashboard')
    }
  }

  async function signUp() {

  console.log('SIGNUP CLICK')

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })

  console.log(data)
  console.log(error)

  if (error) {
    alert(error.message)
  } else {
    alert('Cuenta creada ✔ ahora puedes hacer login')
  }
}

  return (
    <div style={{ padding: 40 }}>
      <h1>Mi App Privada</h1>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Contraseña"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={login}>
        Entrar
      </button>

      <button onClick={signUp} style={{ marginLeft: 10 }}>
        Crear cuenta
      </button>
    </div>
  )
}
