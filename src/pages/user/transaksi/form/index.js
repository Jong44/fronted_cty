// pages/transaction.js
import React, { useState } from 'react';

export default function Transaction() {
  const [formData, setFormData] = useState({
    originalOwnerName: '',
    originalOwnerAddress: '',
    recipientName: '',
    recipientEmail: '',
    recipientNIK: '',
    recipientAddress: '',
    transferType: 'Pewarisan',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add your submit logic here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-8 mt-10">
        <h1 className="text-3xl font-bold text-center mb-8">Pindah Kepemilikan Hak Milik</h1>

        <div className="flex justify-center mb-8">
          <img
            src="/assets/icons/sertifikat1.png" // Replace with the actual image source
            alt="Certificate Preview"
            className="w-3/5 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mt-6">
            <label className="block text-sm font-medium mb-2" htmlFor="transferType">
              Bentuk Peralihan
            </label>
            <select
              id="transferType"
              name="transferType"
              value={formData.transferType}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            >
              <option value="Pewarisan">Pewarisan</option>
              <option value="Jual-Beli">Jual-Beli</option>
              <option value="Hibah">Hibah</option>
              <option value="Wasiat">Wasiat</option>
            </select>
          </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6 py-5">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="originalOwnerName">
                Nama Pemilik Asal
              </label>
              <input
                type="text"
                id="originalOwnerName"
                name="originalOwnerName"
                value={formData.originalOwnerName}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="originalOwnerAddress">
                Alamat Pemilik Asal
              </label>
              <input
                type="text"
                id="originalOwnerAddress"
                name="originalOwnerAddress"
                value={formData.originalOwnerAddress}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="recipientName">
                Nama Penerima
              </label>
              <input
                type="text"
                id="recipientName"
                name="recipientName"
                value={formData.recipientName}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="recipientEmail">
                Email Penerima
              </label>
              <input
                type="email"
                id="recipientEmail"
                name="recipientEmail"
                value={formData.recipientEmail}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="recipientNIK">
                NIK Penerima
              </label>
              <input
                type="text"
                id="recipientNIK"
                name="recipientNIK"
                value={formData.recipientNIK}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="recipientAddress">
                Alamat Penerima
              </label>
              <input
                type="text"
                id="recipientAddress"
                name="recipientAddress"
                value={formData.recipientAddress}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              />
            </div>
          </div>

          

          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-3 px-10 rounded-3xl shadow-lg hover:bg-blue-600"
            >
              ACCEPT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
