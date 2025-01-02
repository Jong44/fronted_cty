import React, { useEffect, useState } from 'react'
import RootLayout from '@/components/global/layout/RootLayout'
import CardPrimary from '@/components/global/CardPrimary'
import { TransaksiApi } from '@/services/transaksi';
import { SertifikatApi } from '@/services/sertifikat';
import Skeleton from 'react-loading-skeleton';

const Dashboard = () => {
      const [dataTransaksi, setDataTransaksi] = useState(0);
      const [dataSertifikat, setDataSertifikat] = useState(0);
      const [dataSertifikats, setDataSertifikats] = useState([]);
      const [dataListSertifikat, setDataListSertifikat] =useState([]);
      const [loading, setLoading] = useState(false);
      useEffect(() => {
          const uid = localStorage.getItem('uid');
          const fetchSertifikat = async () => {
              setLoading(true);
              const dataSertifikat = await SertifikatApi().getCountSertifikatByUid(uid);
              const dataSertifikats = await SertifikatApi().getAllSertificate(uid);
              const dataTransaksi = await TransaksiApi().getCountTransaksiByUid(uid);
              const dataList = await SertifikatApi().getAllSertificate(uid);
              setDataSertifikat(dataSertifikat.data);
              setDataTransaksi(dataTransaksi.data);
              setDataSertifikats(dataSertifikats.data);
              setDataListSertifikat(dataList.data);
              console.log(dataList)
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
              {dataTransaksi}
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
                {loading ?(
                  Array.from({ length: 3 }).map((_, i) => (
                    <tr key={i}>
                      <td className='border px-4 py-2'><Skeleton height={30} /> </td>
                      <td className='border px-4 py-2'>Shazia</td>
                      <td className='border px-4 py-2'>Sertifikat Tanah</td>
                      <td className='border px-4 py-2'>06-12-2024</td>
                      <td className='border px-4 py-2'>Verified</td>
                    </tr>
                  ))
                ) : (
                  dataListSertifikat.length < 0 ? (
                    <tr key={index}>
                    <td className='border px-4 py-2'><Skeleton height={30} /> </td>
                    <td className='border px-4 py-2'>Shazia</td>
                    <td className='border px-4 py-2'>Sertifikat Tanah</td>
                    <td className='border px-4 py-2'>06-12-2024</td>
                    <td className='border px-4 py-2'>Verified</td>
                  </tr>
                  ) : (
                    dataListSertifikat.map((item, index) =>(
                      <tr key={index}>
                      <td className='border px-4 py-2'>{index +1}</td>
                      <td className='border px-4 py-2'>{item.data_decrypted.nama}</td>
                      <td className='border px-4 py-2'>Sertifikat Tanah</td>
                      <td className='border px-4 py-2'>{new Date(item.created_at).toLocaleDateString()}</td>
                      <td className='border px-4 py-2'>Verified</td>
                    </tr>
                    ))
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </RootLayout>
  )
}

export default Dashboard