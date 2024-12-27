import { signUp } from '../../services/user/supabaseClient'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import * as Yup from 'yup'

const Register = () => {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required(),
  })

  const handleSignUp = async (values) => {
    try {
      const { error } = await signUp(values.email, values.password)
      
      if (error) {
        setModalMessage(`Pendaftaran gagal: ${error.message}`)
        setIsSuccess(false)
      } else {
        setModalMessage('Pendaftaran berhasil! Silakan periksa email Anda untuk konfirmasi.')
        setIsSuccess(true)
      }
      setShowModal(true)
    } catch (err) {
      console.error('Unexpected error:', err)
      setModalMessage('Terjadi kesalahan tak terduga. Silakan coba lagi.')
      setIsSuccess(false)
      setShowModal(true)
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
          <Formik
            initialValues={{ email: '', password: '', passwordConfirm: '' }}
            validationSchema={schema}
            onSubmit={handleSignUp}
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
                  <ErrorMessage name="email" component={'p'} className="text-red-500" />
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
                  <ErrorMessage name="password" component={'p'} className="text-red-500" />
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
                  <ErrorMessage name="passwordConfirm" component={'p'} className="text-red-500" />
                </div>
                <p className="flex justify-end text-blue-700">Sudah punya akun? <a href="/auth/login">Login di sini</a></p>
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
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-4 rounded shadow-md w-96 text-center">
                <h3 className={`text-lg font-bold ${isSuccess ? 'text-green-500' : 'text-red-500'}`}>
                  {isSuccess ? 'Berhasil' : 'Gagal'}
                </h3>
                <p className="mt-2">{modalMessage}</p>
                <button
                  onClick={() => {
                    setShowModal(false)
                    if (isSuccess) router.push('/auth/login')
                  }}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                >
                  OK
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Register
