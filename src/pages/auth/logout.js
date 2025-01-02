// Logout.js
import { createClient } from '@supabase/supabase-js'
import { useRouter } from 'next/router'
import { alertSuccess } from '@/utils/callAlert'
import { useEffect } from 'react'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL, 
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const Logout = () => {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) {
        alert(`Logout gagal: ${error.message}`)
      } else {
        localStorage.removeItem('uid') // Hapus UID dari Local Storage
        alertSuccess('Logout berhasil!')
        router.push('/auth/login') // Redirect ke halaman login atau halaman lain
      }
    } catch (error) {
      console.error('Error during logout:', error)
    }
  }

  useEffect(() => {
    handleLogout()
  }, []);

  return;
}

export default Logout