import axios from 'axios';
import { BASE_URL } from '../baseUrl';

export const PengajuanApi = () => {
  const url = `${BASE_URL}/sertifikat`;

  const submitPengajuan = async (formData) => {
    try {
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        // Jika server merespons dengan status di luar 2xx
        throw error.response.data; // Lempar error agar bisa ditangkap di luar
      } else if (error.request) {
        // Jika permintaan dikirim tetapi tidak ada respons
        throw new Error('Tidak ada respons dari server. Coba lagi nanti.');
      } else {
        // Jika error terjadi sebelum permintaan dikirim
        throw new Error(error.message);
      }
    }
  };

  return {
    submitPengajuan,
  };
};


// export const PengajuanApi = () => {
//   const url = `${BASE_URL}/sertifikat`;

//   const submitPengajuan = async (formData) => {
//     const response = await axios.post(url, formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     response.data
//   };

//   return {
//     submitPengajuan,
//   };
// };
