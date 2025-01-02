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
      if(response.status === 201) {
        return response.data;
      }else{
        return response.data
      }
    } catch (error) {
      console.error('Error submitting pengajuan:', error.message);
      return { success: false, message: error.message };
    }
  };

  return {
    submitPengajuan,
  };
};
