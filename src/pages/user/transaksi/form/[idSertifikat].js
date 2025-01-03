// pages/transaction.js
import { SertifikatApi } from '@/services/sertifikat';
import { TransaksiApi } from '@/services/transaksi';
import { alertSuccess } from '@/utils/callAlert';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function Transaction() {
  const router = useRouter();
  const { idSertifikat } = router.query;
  const [sertifikat, setSertifikat] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchSertifikat = async () => {
    const data = await SertifikatApi().getSertifikatByHash(idSertifikat);
    setSertifikat({
      data: data?.data?.data_decrypted?.file_sertifikat?.data,
      iv: data?.data?.data_decrypted?.file_sertifikat?.iv,
    });
    setFormData({
      originalOwnerName: data.data.data_decrypted.nama,
      originalOwnerAddress: data.data.data_decrypted.alamat
    })
    setLoading(false);

  };

  useEffect(() => {
    if (idSertifikat) {
      fetchSertifikat();
      console.log(sertifikat);
    }
    
    
  }, [idSertifikat]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.recipientName || !formData.recipientEmail || !formData.recipientNIK || !formData.recipientAddress) {
      alert('Please fill all fields');
      return;
    }
    const uid = localStorage.getItem('uid');
    const payload = {
      nama: formData.recipientName,
      email: formData.recipientEmail,
      nik: formData.recipientNIK,
      alamat: formData.recipientAddress,
      fingerprintSertificate: idSertifikat,
      uuid_pengirim: uid,
      transferType: formData.transferType
    }
    
    try {
      const response = await TransaksiApi().createDraftTransaksi(payload);
      alertSuccess('Transaction Success');
      router.push('/user/transaksi');
    } catch (error) {
      alert('Transaction Failed');
    }
  };

  const decryptURL = (encryptedData, iv) => {
      const url = SertifikatApi().decryptURL(encryptedData, iv);
      return url;
    }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-8 mt-10">
        <h1 className="text-3xl font-bold text-center mb-8">Pindah Kepemilikan Hak Milik</h1>

        <div className="flex justify-center mb-8">
          <img
            src={decryptURL(sertifikat?.data, sertifikat?.iv)}
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
