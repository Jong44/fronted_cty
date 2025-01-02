import React, { useEffect, useState } from 'react'
import RootLayout from '@/components/global/layout/RootLayout'
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import { SertifikatApi } from '@/services/sertifikat';
import { useRouter } from 'next/router';  // Import useRouter

const Sertifikat = () => {
  // Menyimpan state untuk mengontrol visibilitas dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [uid, setUid] = useState(null);
  const [dataSertifikat, setDataSertifikat] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();  // Inisialisasi useRouter

  useEffect(() => {
    const uid = localStorage.getItem('uid');
    setUid(uid);
    const fetchSertifikat = async () => {
      setLoading(true);
      const dataSertifikat = await SertifikatApi().getAllSertificate(uid);
      setDataSertifikat(dataSertifikat.data);
      setLoading(false);
      console.log(dataSertifikat);
    }
    fetchSertifikat();
  }, []);

  // Fungsi untuk toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const decryptURL = (encryptedData, iv) => {
    const url = SertifikatApi().decryptURL(encryptedData, iv);
    return url;
  }

  // Fungsi untuk handle onClick navigasi
  const handleCardClick = () => {
    router.push('/user/sertifikat/preview/d8748acb5070ca245697ff5205fb98e59c202b3915bf7829932709f9ac297616');
  }

  return (
    <RootLayout>
      <div className='px-10 py-5'>
        <div className="mb-6">
          {/* Judul di atas dropdown */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">MY CERTIFICATE</h2>

          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded={isDropdownOpen ? "true" : "false"}
                aria-haspopup="true"
                onClick={toggleDropdown}
              >
                Pilih
                <svg className="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {isDropdownOpen && (
              <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div className="py-1" role="none">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0">Tanah</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-1">Properti</a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {loading ? (
            [1, 2, 3, 4].map((item, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
                <div className="w-full h-40 relative">
                  <Skeleton height={160} />
                </div>
                <div className="p-4">
                  <Skeleton height={20} width={100} />
                </div>
              </div>
            ))
          ) : (
            dataSertifikat?.map((item, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl" onClick={handleCardClick}>
                <div className="w-full h-40 relative">
                  <Image
                    src={decryptURL(item.data_decrypted.file_sertifikat?.data, item.data_decrypted.file_sertifikat?.iv)}
                    alt={`Sertifikat ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">Sertifikat {index + 1}</h3>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </RootLayout>
  );
}

export default Sertifikat;
