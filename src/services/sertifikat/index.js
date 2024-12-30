import axios from "axios"
import { BASE_URL } from "../baseUrl"

export const SertifikatApi = () => {
    const url = `${BASE_URL}/sertifikat/count`;
    const getCountSertifikatByUid = async (uid) => {
        try {
            const ress = await axios?.get(`${url}/${uid}`);
            return ress?.data;
        } catch (err) {
            console.log(err);
            return [];
        }
    };
    return {
        getCountSertifikatByUid
    };
}