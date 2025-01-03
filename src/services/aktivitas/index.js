import axios from "axios"
import { BASE_URL } from "../baseUrl"

export const AktivitasApi = () => {
    const url = `${BASE_URL}/aktifitas`;
    const getAktivitasByUid = async (uid) => {
        try {
            const ress = await axios?.get(`${url}/user/${uid}`);
            return ress?.data;
        } catch (err) {
            console.log(err);
            return [];
        }
    };
    const createdActivity = async (data) => {
        try {
            const ress = await axios?.post(url, data);
            return ress?.data;
        } catch (err) {
            console.log(err);
            return [];
        }
    }
    return {
        getAktivitasByUid,
        createdActivity
    };
}