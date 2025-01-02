import axios from "axios";
import { BASE_URL } from "../baseUrl";

export const NotifikasiApi = () => {
  const url = `${BASE_URL}/notif`;

  const getAllNotificationByUser = async (uid) => {
    try {
      const ress = await axios?.get(`${url}/user/${uid}`);
      return ress?.data || [];
    } catch (err) {
      console.log(err);
      return []; // Jika gagal, kembalikan array kosong
    }
  };

  const readAllNotification = async (uid) => {
    try {
      const ress = await axios?.post(`${url}/user/${uid}`);
      return ress?.data || [];
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  const deleteAllNotification = async (uid) => {
    try {                 
      const ress = await axios?.delete(`${url}/${uid}`);
      return ress?.data || [];
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  const sendNotificationToUser = async (uid, title, message) => {
    try {
      const ress = await axios.post(`${url}/${uid}`, { uid, title, message });
      return ress?.data || {};
    } catch (err) {
      console.log(err);
      return {};
    }
  };  

  return {
    getAllNotificationByUser,
    readAllNotification,
    deleteAllNotification,
    sendNotificationToUser,
  };
};
