import { createClient } from '@supabase/supabase-js'
import { alertSuccess } from '@/utils/callAlert'
import { alertError } from '@/utils/callAlert'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import * as Yup from 'yup'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL, 
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const Login = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const schema = Yup.object().shape({
    email: Yup.string().email().required('Email Harus Terisi'),
    password: Yup.string().required('Password Harus Terisi'),
  })

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const { email, password } = values
      const { data,error } = await supabase.auth.signInWithPassword({ email, password })

      if (error) {
        alertError(`Login gagal: ${error.message}`)
      } else {
        const uid = data.user.id
        localStorage.setItem('uid', uid)
        localStorage.setItem('email', email)
        alertSuccess('Login berhasil!')
        router.push('/user/dashboard')
      }
    } catch (error) {
      console.error('Error during login:', error)
    } finally {
      setSubmitting(false)
    }
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
          <Formik className='block justify-center'
            initialValues={formData}
            validationSchema={schema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
            <Form>
            <div>
              <label className="block">Email</label>
              <div className='flex flex-col'>
              <Field
                id="email" name="email" type="text"
                className="w-[40rem] p-2 mt-2 border border-gray-300 rounded"
              />
              <ErrorMessage name="email" component={'p'} className='text-red-500'  />
              </div>
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
              <div className='flex flex-col'>
              <Field
                id="password" name="password" type="password"
                className="w-[40rem] p-2 mt-2 border border-gray-300 rounded"
              />
              <ErrorMessage name='password' component={'p'} className='text-red-500' />
              </div>
            </div>
            <p className='flex justify-end text-blue-700'>Belum punya akun? <a href="/auth/register">Daftar di sini</a></p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 w-[40rem] p-2 bg-blue-500 text-white rounded"
            >
              Masuk
            </button>
            </Form>  
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Login
