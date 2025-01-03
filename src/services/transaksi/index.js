import axios from "axios"
import { BASE_URL } from "../baseUrl"

export const TransaksiApi = () => {
    const url = `${BASE_URL}/aktifitas/count`;
    const getCountTransaksiByUid = async (uid) => {
        try {
            const ress = await axios?.get(`${url}/${uid}`);
            return ress?.data;
        } catch (err) {
            console.log(err);
            return [];
        }
    };
    const getDraftTransaksiByUid = async (uid) => {
        try {
            const ress = await axios?.post(`${BASE_URL}/draft/email`, { email: uid });
            return ress?.data;
        } catch (err) {
            console.log(err);
            return [];
        }
    };
    const createTransaksi = async (data) => {
        try {
            const ress = await axios?.post(`${BASE_URL}/sertifikat/transaksi`, data);
            return ress?.data;
        }
        catch (err) {
            console.log(err);
            return [];
        }
    };

    const deleteTransaksi = async (id) => {
        try {
            const ress = await axios?.delete(`${BASE_URL}/draft/${id}`);
            return ress?.data;
        }
        catch (err) {
            console.log(err);
            return [];
        }
    };

    const createDraftTransaksi = async (data) => {
        try {
            const ress = await axios?.post(`${BASE_URL}/draft`, data);
            return ress?.data;
        }
        catch (err) {
            console.log(err);
            return [];
        }
    };

    return {
        getCountTransaksiByUid,
        getDraftTransaksiByUid,
        createTransaksi,
        deleteTransaksi,
        createDraftTransaksi
    };
}