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
    return {
        getCountTransaksiByUid
    };
}