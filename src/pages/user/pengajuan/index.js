import React from 'react'
import RootLayout from '@/components/global/layout/RootLayout'

const Pengajuan = () => {
  return (
    <RootLayout>
      <h1 className='	text-center mb-5'><b>PERMOHONAN KEAMANAN SERTIFIKAT</b></h1>
      <form>
        <div className='flex'>
        <div className='flex flex-col '>
          <label for="name">Nama Lengkap:</label>
          <input className="border-2 border-black rounded-lg" type="text" id="fname" name="name"/>
        </div>
        <div className='flex flex-col '>
          <label for="email">Email:</label>
          <input className="border-2 border-black rounded-lg" type="text" id="email" name="email"/>
        </div>
        </div>
        <div className='flex'>
        <div className='flex flex-col '>
          <label for="notelp">Nomor Telepon:</label>
          <input className="border-2 border-black rounded-lg" type="text" id="notelp" name="notelp"/>
        </div>
        <div className='flex flex-col '>
          <label for="nik">NIK:</label>
          <input className="border-2 border-black rounded-lg" type="text" id="nik" name="nik"/>
        </div>
        </div>
        <div className='flex flex-col '>
          <label for="alm">Alamat:</label>
          <input className="border-2 border-black rounded-lg" type="text" id="alm" name="alm"/>
        </div>
        <div className='flex flex-col '>
          <label for="notelp">File Sertifikat:</label>
          <input type="file" id="sertif" name="sertif"/>
        </div>
        <div className='flex flex-col '>
          <label for="notelp">File KTP:</label>
          <input type="file" id="ktp" name="ktp"/>
        </div>
        <div className='grid'>
        <button type="submit" className='p-4 bg-blue-500 justify-self-end rounded-3xl text-white px-6 py-2' ><b>SUBMIT</b></button>
        </div>
      </form>
    </RootLayout>
  )
}

export default Pengajuan