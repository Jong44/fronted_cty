import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const signUp = async (email, password) => {
  return await supabase.auth.signUp({
    email,
    password,
  })
}



export const createUser = async (email, uuid) => {
  const name = "Guest"
  return await supabase
    .from('users')
    .insert([{ name,email, uuid }])
}