import Head from 'next/head'
import React from 'react'
import Header from '@/components/global/layout/Header'

const Notifikasi = () => {
  return (
    <>
      <Head>
        <title>User</title>
      </Head>
      <div className="overflow-y-hidden">
        <Header />
        <div className="flex h-[88vh]">
          <main className="flex-1 bg-background p-4">
            <div className="w-full px-20 p-10 shadow-2xl rounded-md bg-gray-200">
                <h4 className="text-start"><b>C-TY</b></h4>
                <h4 className="text-start"><b>Selamat, Sertifikat anda sudah terverifikasi</b></h4>
                <h4 className="text-start">Halo Shazia, selamat sertifikat anda sudah terferivikasi oleh BPN</h4>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default Notifikasi
