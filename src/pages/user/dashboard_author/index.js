import React from 'react'
import RootLayout from '@/components/global/layout/RootLayout'
import Dashboard from '../dashboard'

const DashboardAuthor = () => {
  return (
    <RootLayout>
        <div className='grid gap-8'>
          <h2 className="text-center text-2xl"><b>VERIFIKASI TRANSAKSI SERTIFIKAT</b></h2>
          <div className='container mx-auto w-[60rem] h-[20rem] rounded-3xl bg-blue-200 p-4'>
            <div>
              <table className='table-auto w-full border-collapse'>
                <thead>
                  <tr>
                    <th>NO</th>
                    <th>JENIS SERTIFIKAT</th>
                    <th>NAMA PEMILIK</th>
                    <th>TANGGAL PENGAJUAN</th>
                    <th>TINDAKAN</th>
                    <th>DETAIL SERTIFIKAT</th>
                  </tr>
                </thead>
                <tbody className='text-center'>
                  <tr>
                    <td>1.</td>
                    <td>Sertifikat Rumah</td>
                    <td>Shazia</td>
                    <td>08-12-2024</td>
                    <td></td>
                    <td><button className='bg-blue-700 rounded-2xl px-4 py-2'><a href='/user/detail'>LIHAT DETAIL</a></button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </RootLayout>
  )
}

export default DashboardAuthor