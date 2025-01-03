import axios from "axios"
import { BASE_URL } from "../baseUrl"

export const UserApi = () => {
    const url = `${BASE_URL}/user`;
    const getUserByUid = async (uid) => {
        try {
            const ress = await axios?.get(`${url}/${uid}`);
            return ress?.data;
        } catch (err) {
            console.log(err);
            return [];
        }
    };

    const updateUser = async (uid) => {
        try {
            const ress = await axios?.put(`${url}/${uid}`);
            return ress?.data;
        } catch (err) {
            console.log(err);
            return [];
        }
    };

    return {
        getUserByUid,
        updateUser
    };
}

