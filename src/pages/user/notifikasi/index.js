import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Header from '@/components/global/layout/Header';
import { useRouter } from 'next/router';
import { NotifikasiApi } from '@/services/notifikasi';
import Skeleton from 'react-loading-skeleton';

const Notifikasi = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  const [dataNotifikasi, setDataNotifikasi] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const uid = localStorage.getItem('uid');
    setUid(uid);
    const fetchNotifikasi = async () => {
      setLoading(true);
      try {
        const data = await NotifikasiApi().getAllNotificationByUser(uid);
        if (Array.isArray(data.data)) {
          setDataNotifikasi(data.data);
        } else {
          console.log('Data yang diterima bukan array:', data);
          setDataNotifikasi([]);
        }
      } catch (err) {
        console.error('Error fetching notifications:', err);
        setDataNotifikasi([]); 
      }
      setLoading(false);
    };

    fetchNotifikasi();
  }, []);

  const { readAllNotification, deleteAllNotification } = NotifikasiApi();

  const handleReadAllNotification = async () => {
    try {
      const data = await readAllNotification(uid);
      console.log('Notifikasi berhasil dibaca:', data);
      setDataNotifikasi(prevState =>
        prevState.map(notification => ({
          ...notification,
          is_read: "true",
        }))
      ); 
    } catch (err) {
      console.error('Gagal membaca notifikasi:', err);
    }
  };

  const handleDeleteAllNotification = async () => {
    try {
      const data = await deleteAllNotification(uid);
      console.log('Notifikasi berhasil dihapus:', data);
      setDataNotifikasi([]); 
    } catch (err) {
      console.error('Gagal menghapus notifikasi:', err);
    }
  };

  return (
    <>
      <Head>
        <title>Notifikasi</title>
      </Head>
      <div className="overflow-y-hidden">
        <Header />
        <div className="flex h-[88vh] fixed inset-0 top-[6.3rem]">
          <div className="flex-1 bg-background p-10">
            <div className="flex justify-between items-center gap-6 mb-5">
              {/* Tombol kembali */}
              <div className="flex items-center gap-3 cursor-pointer">
                <button className="text-2xl font-bold" onClick={handleBack}>&lt;</button>
              </div>
              <div className="flex gap-6">
                <button className="text-lg font-medium" onClick={handleReadAllNotification}>Read All</button>
                <button className="text-lg font-medium text-red-500" onClick={handleDeleteAllNotification}>Delete All</button>
              </div>
            </div>

            {loading ? (
              <div>
                <Skeleton height={30} count={5} /> {/*ketika sedang dimuat*/}
              </div>
            ) : dataNotifikasi && dataNotifikasi.length === 0 ? (
              <p>Tidak ada notifikasi saat ini.</p> 
            ) : (
              dataNotifikasi.map((item, index) => (
                <div
                  key={index}
                  className="w-full px-20 p-10 shadow-md rounded-md bg-white-200 flex justify-between items-center"
                >
                  <div className="">
                    <h4 className="text-start">
                      <b>C-TY</b>
                    </h4>
                    <h4 className="text-start">
                      <b>{item.title ?? "Judul"}</b>
                    </h4>
                    <h4 className="text-start">
                      {item.message ?? "Content"}
                    </h4>
                  </div>
                  {item.is_read == "false" ? (<div className="w-5 h-5 bg-blue-400 my-5 rounded-full"></div> ) : null }
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Notifikasi;
