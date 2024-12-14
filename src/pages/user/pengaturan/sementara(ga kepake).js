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
          <button className="mt-1 px-3 py-1 bg-blue-600 text-white rounded-full text-xs">
            <a href="/user/gantiprofil">Change Profile</a>
          </button>
        </div>

        <h4 className="text-left mb-3"><b>Personal Information</b></h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs mb-1"><b>First Name</b></label>
            <input
              type="text"
              value="Shazia"
              className="w-full p-1 border border-gray-300 rounded-md text-sm"
              readOnly
            />
          </div>
          <div>
            <label className="block text-xs mb-1"><b>Last Name</b></label>
            <input
              type="text"
              value="Mirza"
              className="w-full p-1 border border-gray-300 rounded-md text-sm"
              readOnly
            />
          </div>
          <div>
            <label className="block text-xs mb-1"><b>Email</b></label>
            <input
              type="email"
              value="shazi******@gmail.com"
              className="w-full p-1 border border-gray-300 rounded-md text-sm"
              readOnly
            />
          </div>
          <div>
            <label className="block text-xs mb-1"><b>Alamat</b></label>
            <input
              type="text"
              value="***********"
              className="w-full p-1 border border-gray-300 rounded-md text-sm"
              readOnly
            />
          </div>
          <div>
            <label className="block text-xs mb-1"><b>No Telepon Aktif</b></label>
            <input
              type="text"
              value="08xxxxxxxxx"
              className="w-full p-1 border border-gray-300 rounded-md text-sm"
              readOnly
            />
          </div>
          <div>
            <label className="block text-xs mb-1"><b>Private Key</b></label>
            <input
              type="text"
              value="Private Key"
              className="w-full p-1 border border-gray-300 rounded-md text-sm"
              readOnly
            />
          </div>
          <div>
            <label className="block text-xs mb-1"><b>Public Key</b></label>
            <input
              type="text"
              value="Public Key"
              className="w-full p-1 border border-gray-300 rounded-md text-sm"
              readOnly
            />
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default Pengaturan;
