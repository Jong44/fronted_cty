import { useRouter } from 'next/router'
import React from 'react'

const Register = () => {
  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    if (!email || !password) {
      alert('Email dan password harus diisi')
      return
    }

    router.push('/user/dashboard')
  }
  return (
    <div className="flex h-screen">
      <div className="flex-initial w-2/5 bg-blue-500">
        <div className="flex items-center h-full">
          <img src="/assets/logo.svg" alt="Logo" />
        </div>
      </div>

      <div className="flex-initial w-3/5 bg-gray-100 p-4">
        <div className="h-full flex flex-col justify-center items-center">
          <p className="text-3xl text-center mb-4"><b>Selamat Datang Bos!</b></p>
          <form className='block justify-center' onSubmit={handleSubmit}>
            <div>
              <label className="block">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Masukkan Email"
                className="w-[40rem] p-2 mt-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Masukkan Password"
                className="w-[40rem] p-2 mt-2 border border-gray-300 rounded"
              />
            </div>
            <p className='flex justify-end text-blue-700'>Belum punya akun? <a href="/auth/register">Daftar di sini</a></p>
            <button
              type="submit"
              className="mt-4 w-[40rem] p-2 bg-blue-500 text-white rounded"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
