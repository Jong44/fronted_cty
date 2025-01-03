import axios from "axios"
import { BASE_URL } from "../baseUrl"
import CryptoJS from "crypto-js";

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
    }
    const decryptURL = (encryptedData, iv) => {
        if (!encryptedData || !iv) return null
        const key = CryptoJS.enc.Hex.parse(process.env.NEXT_PUBLIC_ENCRYPT_KEY); // Kunci harus sama dengan backend
        const ivParsed = CryptoJS.enc.Hex.parse(iv);
    
        const decrypted = CryptoJS.AES.decrypt(
            { ciphertext: CryptoJS.enc.Hex.parse(encryptedData) },
            key,
            { iv: ivParsed, mode: CryptoJS.mode.CBC }
        );
    
        return decrypted.toString(CryptoJS.enc.Utf8); // URL asli
    };
    
    const getSertifikatByHash = async (hash) => {
        try {
            const ress = await axios?.get(`${url}/hash/${hash}`);
            return ress?.data;
        }
        catch (err) {
            console.log(err);
            return [];
        }
    }

    return {
        getCountSertifikatByUid,
        getAllSertificate,
        decryptURL,
        getSertifikatByHash
    };
}