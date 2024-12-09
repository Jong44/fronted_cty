import React from 'react';
import RootLayout from '@/components/global/layout/RootLayout';

const Pengaturan = () => {
  return (
    <RootLayout>
      <div className="flex-1 bg-white rounded-lg px-8 py-6">
        <div className="text-center mb-4">
          <img
            src="/assets/icons/DINO.jpeg" 
            alt="Profile Picture"
            className="w-20 h-20 rounded-full mx-auto"
          />
          <h3 className="text-lg mt-2 underline"><b>Shazia Mirza</b></h3>
        </div>

        <h4 className="text-left mb-3"><b>Personal Information</b></h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs mb-1"><b>First Name</b></label>
            <input
              type="text"
              placeholder='Shazia'
              className="w-full p-1 border border-gray-300 rounded-md text-sm"
            />
          </div>
          <div>
            <label className="block text-xs mb-1"><b>Last Name</b></label>
            <input
              type="text"
              placeholder="Mirza"
              className="w-full p-1 border border-gray-300 rounded-md text-sm"
            />
          </div>
          <div>
            <label className="block text-xs mb-1"><b>Email</b></label>
            <input
              type="email"
              placeholder="shaziamirza@gmail.com"
              className="w-full p-1 border border-gray-300 rounded-md text-sm"
            />
          </div>
          <div>
            <label className="block text-xs mb-1"><b>Alamat</b></label>
            <input
              type="text"
              placeholder="Jl. Hasanuddin 10, Jakarta Barat"
              className="w-full p-1 border border-gray-300 rounded-md text-sm"
            />
          </div>
          <div>
            <label className="block text-xs mb-1"><b>No Telepon Aktif</b></label>
            <input
              type="text"
              placeholder="08xxxxxxxxx"
              className="w-full p-1 border border-gray-300 rounded-md text-sm"
            />
          </div>
          <div>
            <label className="block text-xs mb-1"><b>Private Key</b></label>
            <input
              type="text"
              placeholder="Private Key"
              className="w-full p-1 border border-gray-300 rounded-md text-sm"
            />
          </div>
          <div>
            <label className="block text-xs mb-1"><b>Public Key</b></label>
            <input
              type="text"
              placeholder="Public Key"
              className="w-full p-1 border border-gray-300 rounded-md text-sm"
            />
          </div>
          <button className="mt-1 px-3 py-1 bg-blue-600 text-white rounded-full text-xs w-2/5 mx-auto">
            <a href="/user/gantiprofil">Selesai</a>
          </button>
        </div>
      </div>
    </RootLayout>
  );
};

export default Pengaturan;
