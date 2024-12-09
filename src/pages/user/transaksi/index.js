import React from 'react'
import RootLayout from '@/components/global/layout/RootLayout'

const Transaksi = () => {
  return (
    <RootLayout>
      <div className="flex space-x-4 h-[35rem] overflow-y-auto">

        {/* Flex 1 */}
        <div className="flex-1 h-full">
          <div className="shadow-md rounded-md bg-white w-full max-w-[70rem] p-4">
            <div className="space-y-6">
              <div className="break-words">
                <h2 className="text-lg font-bold mb-4">Sertifikat Hak Milik</h2>
                <div className="border border-gray-300 p-4 rounded-lg">
                  <h1>Radian</h1>
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
              <button class="mt-6 ml-10 w-2/5 bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 flex items-center justify-center">
                   Transfer
              </button>
            </div>
          </div>
        </div>

        {/* Flex 2 */}
        <div className="flex-1 h-full">
          <div className="shadow-md rounded-md bg-white w-full max-w-[30rem] p-4">
            <div className="space-y-6">
              <div className="break-words">
                <h2 className="text-lg font-bold mb-4">Sertifikat</h2>
                <div className="border border-gray-300 rounded-lg">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE8drGHNvDB2IbuclGCMuQTYHpxZx7NwsPSaB00tWKPOg3mccNwEllFlThRYIBC4sJ-n4&usqp=CAU"
                    alt="Gambar Bidang Tanah"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <h2 className="text-lg font-bold mb-4">Riwayat Kepemilikan</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg p-4 border border-gray-300">
                  <div>
                    <p className="font-semibold">Tanjung</p>
                    <p className="text-sm text-gray-500">12 November 2024</p>
                  </div>
                  <span className="bg-yellow-100 text-yellow-700 text-sm font-semibold px-4 py-1 rounded-full">Pemilik</span>
                </div>
                <div className="flex items-center justify-between rounded-lg p-4 border border-gray-300">
                  <div>
                    <p className="font-semibold">Radian</p>
                    <p className="text-sm text-gray-500">12 November 2024</p>
                  </div>
                  <span className="bg-green-100 text-green-700 text-sm font-semibold px-4 py-1 rounded-full">Verifikasi</span>
                </div>
                <div className="flex items-center justify-between rounded-lg p-4 border border-gray-300">
                  <div>
                    <p className="font-semibold">Adhitya</p>
                    <p className="text-sm text-gray-500">12 November 2024</p>
                  </div>
                  <span className="bg-yellow-100 text-yellow-700 text-sm font-semibold px-4 py-1 rounded-full">Pemilik</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>

      </div>
    </RootLayout>
  )
}

export default Transaksi
