import React, { useEffect, useState } from 'react'
import RootLayout from '@/components/global/layout/RootLayout'
import CardPrimary from '@/components/global/CardPrimary'
import { SertifikatApi } from '@/services/sertifikat';

const Dashboard = () => {
      const [dataSertifikat, setDataSertifikat] = useState(0);
      const [loading, setLoading] = useState(false);
      useEffect(() => {
          const fetchSertifikat = async () => {
              setLoading(true);
              const data = await SertifikatApi().getCountSertifikatByUid("239181d2-1724-4aa3-9224-949912e8f2f3");
              setDataSertifikat(data.data);
              setLoading(false);
          };
          fetchSertifikat();
      }, []);
  return (
    <RootLayout>
      <main className='px-10 py-5 md:flex gap-10'>
        <div className='flex flex-col gap-5'>
          <CardPrimary>
            <h4 className='text-center'><b>Sertifikat</b></h4>
            <div className='text-5xl text-center'>
              {dataSertifikat}
            </div>
          </CardPrimary>
          <CardPrimary>
            <h4 className='text-center'><b>Permohonan</b></h4>
            <div className='text-5xl text-center'>
              10
            </div>
          </CardPrimary>
          <CardPrimary>
            <h4 className='text-center'><b>Transaksi</b></h4>
            <div className='text-5xl text-center'>
              10
            </div>
          </CardPrimary>
        </div>
        <div className='flex-1'>
          <div className='shadow-md rounded-md bg-white w-full h-[33rem] p-4'>
            <h1 className='p-4 text-center text-2xl'><b>Data Sertifikat</b></h1>
            <table className='table-auto w-full border-collapse'>
              <thead className='bg-gray-300'>
                <tr>
                  <th className='border px-4 py-2'>No</th>
                  <th className='border px-4 py-2'>Nama Pemilik</th>
                  <th className='border px-4 py-2'>Jenis</th>
                  <th className='border px-4 py-2'>Tanggal Pengajuan</th>
                  <th className='border px-4 py-2'>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border px-4 py-2'>1.</td>
                  <td className='border px-4 py-2'>Shazia</td>
                  <td className='border px-4 py-2'>Sertifikat Tanah</td>
                  <td className='border px-4 py-2'>06-12-2024</td>
                  <td className='border px-4 py-2'>Verified</td>
                </tr>
                <tr>
                  <td className='border px-4 py-2'>2.</td>
                  <td className='border px-4 py-2'>Shazia</td>
                  <td className='border px-4 py-2'>Sertifikat Rumah</td>
                  <td className='border px-4 py-2'>08-12-2024</td>
                  <td className='border px-4 py-2'>Waiting</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </RootLayout>
  )
}

export default Dashboard