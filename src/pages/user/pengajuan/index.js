import React from 'react'
import RootLayout from '@/components/global/layout/RootLayout'

const Pengajuan = () => {
  return (
    <RootLayout>
      <h1 className='	text-center mb-5 text-3xl'><b>PERMOHONAN KEAMANAN SERTIFIKAT</b></h1>
      <form>
        <div className='flex w-full gap-10'>
        <div className='flex flex-col gap-3 w-full p-2'>
          <label for="name">Nama Lengkap</label>
          <input className="border border-black text-sm rounded-lg outline-none p-2" type="text" id="fname" name="name"/>
        </div>
        <div className='flex flex-col gap-3 w-full p-2'>
          <label for="email">Email</label>
          <input className="border border-black rounded-lg outline-none p-2" type="text" id="email" name="email"/>
        </div>
        </div>
        <div className='flex w-full gap-10'>
        <div className='flex flex-col gap-3 w-full p-2'>
          <label for="notelp">Nomor Telepon</label>
          <input className="border border-black rounded-lg outline-none p-2" type="text" id="notelp" name="notelp"/>
        </div>
        <div className='flex flex-col gap-3 w-full p-2'>
          <label for="nik">NIK</label>
          <input className="border border-black rounded-lg outline-none p-2" type="text" id="nik" name="nik"/>
        </div>
        </div>
        <div className='flex flex-col gap-3 w-full p-2'>
          <label for="alm">Alamat</label>
          <textarea className="border border-black rounded-lg outline-none p-2 h-24" type="text" id="alm" name="alm">
          </textarea>
        </div>
        <div className='flex flex-col gap-3 p-2'>
          <label for="notelp">File Sertifikat</label>
          <input type="file" id="sertif" name="sertif"/>
        </div>
        <div className='flex flex-col gap-3 p-2'>
          <label for="notelp">File KTP</label>
          <input type="file" id="ktp" name="ktp"/>
        </div>
        <div className='grid'>
        <button type="submit" className='p-4 bg-blue-500 flex justify-self-end items-end rounded-3xl text-white px-6 py-2' ><b>SUBMIT</b></button>
        </div>
      </form>
    </RootLayout>
  )
}

export default Pengajuan