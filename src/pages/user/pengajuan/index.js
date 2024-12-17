import React, { useState } from 'react'
import RootLayout from '@/components/global/layout/RootLayout'
import { useRouter } from 'next/router'
import * as yup from 'yup'
import { ErrorMessage, Field, Form, Formik } from 'formik'

const Pengajuan = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    notelp: '',
    nik: '',
    alm: '',
    sertif: null,
    ktp: null
  })

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    notelp: yup.string().required().test('len', 'Must be exactly 12 characters', val => val.toString().length === 12),
    nik: yup.number().required().test('len', 'Must be exactly 16 characters', val => val.toString().length === 16),
    alm: yup.string().required(),
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }


  const handleSubmit = async (values) => {

    const data = {
      name: values.name,
      email: values.email,
      notelp: values.notelp,
      nik: values.nik,
      alm: values.alm,
      sertif: formData.sertif,
      ktp: formData.ktp
    }
    localStorage.setItem('formPengajuan', JSON.stringify(data))
    router.push('/user/pengajuan/preview')
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setFormData({
          ...formData,
          [e.target.name]: reader.result
        })
      }
      reader.readAsDataURL(file)
    }
  }

  
  return (
    <RootLayout>
      <div className='px-10 py-5'>
      <h1 className='	text-center mb-5 text-3xl'><b>PERMOHONAN KEAMANAN SERTIFIKAT</b></h1>
      <Formik
        initialValues={formData}
        validationSchema={schema}
        onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form>
            <div className='flex w-full gap-10'>
            <div className='flex flex-col gap-3 w-full p-2'>
              <label for="name">Nama Lengkap</label>
              <Field className="border border-black text-sm rounded-lg outline-none p-2" type="text" id="fname" name="name"/>
              <ErrorMessage name="name" component={'p'} className='text-red-500' />
            </div>
            <div className='flex flex-col gap-3 w-full p-2'>
              <label for="email">Email</label>
              <Field className="border border-black rounded-lg outline-none p-2" type="text" id="email" name="email"/>
              <ErrorMessage name="email" component={'p'} className='text-red-500' />
            </div>
            </div>
            <div className='flex w-full gap-10'>
            <div className='flex flex-col gap-3 w-full p-2'>
              <label for="notelp">Nomor Telepon</label>
              <Field className="border border-black rounded-lg outline-none p-2" type="text" id="notelp" name="notelp"/>
              <ErrorMessage name="notelp" component={'p'} className='text-red-500' />
            </div>
            <div className='flex flex-col gap-3 w-full p-2'>
              <label for="nik">NIK</label>
              <Field className="border border-black rounded-lg outline-none p-2" type="text" id="nik" name="nik"/>
              <ErrorMessage name="nik" component={'p'} className='text-red-500' />
            </div>
            </div>
            <div className='flex flex-col gap-3 w-full p-2'>
              <label for="alm">Alamat</label>
              {/* Textarea */}
              <Field className="border border-black rounded-lg outline-none p-2" type="text" id="alm" name="alm"/>
              <ErrorMessage name="alm" component={'p'} className='text-red-500' />
            </div>
            <div className='flex flex-col gap-3 p-2'>
              <label for="notelp">File Sertifikat</label>
              <Field className="border border-black rounded-lg outline-none p-2" type="file" id="sertif" name="sertif" onChange={(e) => handleFileChange(e, setFieldValue)}/>
              <ErrorMessage name="sertif" component={'p'} className='text-red-500' />
            </div>
            <div className='flex flex-col gap-3 p-2'>
              <label for="notelp">File KTP</label>
              <Field className="border border-black rounded-lg outline-none p-2" type="file" id="ktp" name="ktp" onChange={(e) => handleFileChange(e, setFieldValue)}/>
              <ErrorMessage name="ktp" component={'p'} className='text-red-500' />
            </div>
            <div className='grid'>
              <button type="submit" disabled={isSubmitting} className='p-4 bg-blue-500 flex justify-self-end items-end rounded-3xl text-white px-6 py-2' ><b>SUBMIT</b></button>
            </div>
          </Form>
          )}
        </Formik>
      </div>
    </RootLayout>
  )
}

export default Pengajuan