import React from 'react'
import RootLayout from '@/components/global/layout/RootLayout'

const Sertifikat = () => {
  return (
    <RootLayout>
      <div class="max-w-7xl mx-auto p-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

      <div class="bg-white shadow-lg rounded-lg p-5 h-[30rem]">
        <h2 class="text-lg font-bold mb-4">MY CERTIFICATE</h2>
        <div class="border border-black-500 rounded-md p-4 h-[25rem]">
          <p class="text-lg font-semibold">TANAH HAK MILIK</p>
          <p class="text-sm text-gray-500">No. 123 xxx xxx xxx</p>
        </div>
      </div>

   
      <div>
        <h2 class="text-lg font-bold mb-4">Riwayat Kepemilikan</h2>
        <div class="space-y-4">
          
          <div class="flex items-center justify-between rounded-lg p-4 border border-gray-300">
            <div>
              <p class="font-semibold">Tanjung</p>
              <p class="text-sm text-gray-500">12 November 2024</p>
            </div>
            <span class="bg-yellow-100 text-yellow-700 text-sm font-semibold px-4 py-1 rounded-full">Pemilik</span>
          </div>
          <div class="flex items-center justify-between rounded-lg p-4 border border-gray-300">
            <div>
              <p class="font-semibold">Radian</p>
              <p class="text-sm text-gray-500">12 November 2024</p>
            </div>
            <span class="bg-green-100 text-green-700 text-sm font-semibold px-4 py-1 rounded-full">Verifikasi</span>
          </div>
          <div class="flex items-center justify-between rounded-lg p-4 border border-gray-300">
            <div>
              <p class="font-semibold">Adhitya</p>
              <p class="text-sm text-gray-500">12 November 2024</p>
            </div>
            <span class="bg-yellow-100 text-yellow-700 text-sm font-semibold px-4 py-1 rounded-full">Pemilik</span>
          </div>
        </div>
      </div>
    </div>
    <button class="mt-6 ml-10 w-2/5 bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 flex items-center justify-center">
          Transfer
        </button>
  </div>

    </RootLayout>
  )
}

export default Sertifikat