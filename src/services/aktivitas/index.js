import axios from "axios"
import { BASE_URL } from "../baseUrl"

export const AktivitasApi = () => {
    const url = `${BASE_URL}/aktifitas/user`;
    const getAktivitasByUid = async (uid) => {
        try {
            const ress = await axios?.get(`${url}/${uid}`);
            return ress?.data;
        } catch (err) {
            console.log(err);
            return [];
        }
    };
    return {
        getAktivitasByUid
    };
}