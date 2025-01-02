import React, { useEffect } from 'react';
import RootLayout from '@/components/global/layout/RootLayout';
import { useRouter } from 'next/router';
import { SertifikatApi } from '@/services/sertifikat';

const Transaksi = () => {
  const router = useRouter();

  const { idSertifikat } = router.query;

  const fetchSertifikat = async () => {
    const data = await SertifikatApi().getSertifikatByHash(idSertifikat);
    console.log(data);
  };

  useEffect(() => {
    if (idSertifikat) {
      fetchSertifikat();
    }
  }, [idSertifikat]);
  
  // Fungsi untuk mendownload gambar
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/icons/sertifikat1.png'; // Path ke gambar
    link.download = 'sertifikat1.png';  // Nama file yang akan didownload
    link.click();
  };

  // Fungsi untuk menghapus gambar (atau melakukan aksi lain seperti menghapus dari database)
  const handleDelete = () => {
    alert('Sertifikat telah dihapus'); // Anda bisa mengganti ini dengan logika penghapusan yang sesuai
  };

  return (
    <RootLayout>
      <div className="flex space-x-4 h-[35rem] overflow-y-auto">

        {/* Flex 1 */}
        <div className="flex-1 h-full">
          <div className="shadow-md rounded-md bg-white w-full max-w-[30rem] p-4">
            <div className="space-y-6">
              <div className="break-words">
                <h2 className="text-lg font-bold mb-4">Sertifikat</h2>
                <div className="border border-gray-300 rounded-lg">
                  <img
                    src="/assets/icons/sertifikat1.png" // Path gambar
                    alt="Gambar Bidang Tanah"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                {/* Button Download and Hapus */}
                <div className="mt-4 flex gap-4">
                  <button
                    onClick={handleDownload}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    Download
                  </button>
                  <button
                    onClick={handleDelete}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flex 2 */}
        <div className="flex-1 h-full">
          <div className="shadow-md rounded-md bg-white w-full max-w-[70rem] p-4">
            <div className="space-y-6">
            <h2 className="text-lg font-bold mb-4">Sertifikat Tanah</h2>
              <div className="break-words">
                <h2 className="text-lg font-bold mb-4">Nama</h2>
                <div className="border border-gray-300 p-4 rounded-lg">
                  <h1>Radian</h1>
                </div>
              </div>
              <div className="break-words">
                <h2 className="text-lg font-bold mb-4">No. Telp</h2>
                <div className="border border-gray-300 p-4 rounded-lg">
                  <h1>081234567890</h1>
                </div>
              </div>
              <div className="break-words">
                <h2 className="text-lg font-bold mb-4">Bidang Tanah</h2>
                <div className="border border-gray-300 p-4 rounded-lg">
                  <p>Bidang tanah ini terletak di Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus blandit turpis eget ornare. Fusce pulvinar lacus diam.</p>
                </div>
              </div>
              <div className="break-words">
                <h2 className="text-lg font-bold mb-4">Pemegang Hak Milik</h2>
                <div className="border border-gray-300 p-4 rounded-lg">
                  <p>1. Tanjung, Semarang, 07 Oktober 20XX</p>
                  <p>2. Adhitya, Pati, 02 Agustus 20XX</p>
                </div>
              </div>
              <div className="break-words">
                <h2 className="text-lg font-bold mb-4">Catatan Pendaftaran</h2>
                <div className="border border-gray-300 p-4 rounded-lg">
                  <p>1. Pemisahan dari bidang Hak Milik Nomor 123456789 Desa Randusari, Kecamatan Semarang Barat,Kabupaten Semarang Provinsi Jawa Tengah</p>
                  <p>2. Jual Beli berdasarkan Akta Jual Beli Nomor 123456789 Tanggal 30 November 20XX</p>
                </div>
              </div>
              <button className="mt-6 ml-10 w-2/5 bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 flex items-center justify-center">
                Transfer
              </button>
            </div>
          </div>
        </div>

      </div>
    </RootLayout>
  );
};

export default Transaksi;
