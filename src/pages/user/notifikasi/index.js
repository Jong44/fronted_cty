import Head from 'next/head'
import React from 'react'
import Header from '@/components/global/layout/Header'
import { useRouter } from 'next/router'

const Notifikasi = () => {
  const router = useRouter()
  const handleBack = () => {
    router.back()
  }
  
  

  return (
    <>
      <Head>
        <title>User</title>
      </Head>
      <div className="overflow-y-hidden">
        <Header />
        <div className="flex h-[88vh] fixed inset-0 top-[6.3rem]">
          <div className="flex-1 bg-background p-10">
            <div className='flex justify-between items-center gap-6 mb-5'>
              {/* back button */}
              <div className='flex items-center gap-3 cursor-pointer'>
                <button className='text-2xl font-bold' onClick={handleBack}>&lt;</button>
              </div>
              <div className='flex gap-6'>
                <h5 className='text-lg font-medium'>Read All</h5>
                <h5 className='text-lg font-medium text-red-500'>Delete All</h5>
              </div>
            </div>
            <div className="w-full px-20 p-10 shadow-md rounded-md bg-white-200 flex justify-between items-center">
              <div className=''>
                <h4 className="text-start"><b>C-TY</b></h4>
                <h4 className="text-start"><b>Selamat, Sertifikat anda sudah terverifikasi</b></h4>
                <h4 className="text-start">Halo Shazia, selamat sertifikat anda sudah terferivikasi oleh BPN</h4>
              </div>
              <div className='w-5 h-5 bg-blue-400 my-5 rounded-full'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Notifikasi
