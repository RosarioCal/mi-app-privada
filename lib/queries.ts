import { supabase } from './supabase'

export async function getSedes() {
  const { data, error } = await supabase
    .from('sedes')
    .select('*')
    .order('orden', { ascending: true })

  if (error) {
    console.error(error)
    return []
  }

  return data ?? []
}