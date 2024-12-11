import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import * as Yup from 'yup'

const Register = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordConfirm: ''
  })

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    passwordConfirm: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required()
  })

  const handleSubmit = async () => {
    router.push('/auth/login')
  }

  return (
    <div className="flex h-screen">
      <div className="flex-initial w-2/5 bg-blue-500">
        <div className="flex items-center h-full">
          <img src="/assets/logo.svg" alt="Logo"/>
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
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Masukkan Email"
                className="w-[40rem] p-2 mt-2 border border-gray-300 rounded"
              />
              <ErrorMessage name="email" component={'p'} className='text-red-500'/>
            </div>
            <div className="mt-4">
              <label className="block">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Masukkan Password"
                className="w-[40rem] p-2 mt-2 border border-gray-300 rounded"
              />
              <ErrorMessage name="password" component={'p'} className='text-red-500'/>
            </div>
            <div className="mt-4">
              <label className="block">Konfirmasi Password</label>
              <Field
                type="password"
                id="passwordConfirm"
                name="passwordConfirm"
                placeholder="Konfirmasi Password"
                className="w-[40rem] p-2 mt-2 border border-gray-300 rounded"
              />
              <ErrorMessage name="passwordConfirm" component={'p'} className='text-red-500'/>
            </div>
            <p className='flex justify-end text-blue-700'>Sudah punya akun? <a href="/auth/login">Login di sini</a></p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 w-[40rem] p-2 bg-blue-500 text-white rounded"
            >
              Register
            </button>
            </Form>  
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Register
