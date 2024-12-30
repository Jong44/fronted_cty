import axios from "axios"
import { BASE_URL } from "../baseUrl"

export const SertifikatApi = () => {
    const url = `${BASE_URL}/sertifikat`;
    const getCountSertifikatByUid = async (uid) => {
        try {
            const ress = await axios?.get(`${url}/count/${uid}`);
            return ress?.data;
        } catch (err) {
            console.log(err);
            return [];
        }
    };
    const getAllSertificate = async (uid) => {
        try {
            const ress = await axios?.get(`${url}/user/${uid}`);
            return ress?.data;
        } catch (err) {
            console.log(err);
            return [];
        }
    };
    
    return {
        getCountSertifikatByUid,
        getAllSertificate
    };
}