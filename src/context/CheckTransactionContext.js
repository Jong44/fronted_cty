import { AktivitasApi } from "@/services/aktivitas";
import { TransaksiApi } from "@/services/transaksi";
import { alertConfirm } from "@/utils/callAlert";

import Swal from "sweetalert2";

const { createContext, useEffect, useState } = require("react");

const CheckTransactionContext = createContext();

export const CheckTransactionProvider = ({ children }) => {
    const [transaction, setTransaction] = useState(null);
    const [loading, setLoading] = useState(false);

    const [isAlertShown, setIsAlertShown] = useState(false); // State untuk melacak apakah alert sudah muncul


const hapusTransaksi = async (id) => {
    try {
        const response = await TransaksiApi().deleteTransaksi(id);
        if (response.status) {
            Swal.fire("Berhasil!", "Transaksi berhasil dihapus", "success");
        } else {
            Swal.fire("Gagal!", "Transaksi gagal dihapus", "error");
        }
    } catch (error) {
        console.log(error);
    }
};

const createdActivity = async (status) => {
    try {
        const uid = localStorage.getItem("uid");
        const payload = {
            status: status,
            activity_type: "transfer",
            detail: "Menerima transaksi transfer sertifikat",
            uuid: uid
        };

        const   response = await AktivitasApi().createdActivity(payload);
        console.log(response);

    } catch (err) {
        console.log(err);
        return [];
    }
}
    

const createTransaksi = async (data, id) => {
    try {
        const response = await TransaksiApi().createTransaksi(data);
        console.log("transaksi", response);
        if (response.status) {
            createdActivity("success");
            Swal.fire("Berhasil!", "Transaksi berhasil dilanjutkan", "success");
            console.log("transaksi", response);
            hapusTransaksi(id);
        }
        else {
            Swal.fire("Gagal!", "Transaksi gagal dilanjutkan", "error");
            hapusTransaksi(id);
        }
    } catch (error) {
        console.log(error);
    }
}

const checkTransaction = async (email, uid) => {
    setLoading(true);
    try {
        const response = await TransaksiApi().getDraftTransaksiByUid(email);
        setTransaction(response.data);
        const data = response.data ? response.data[0] : null;

        // Logika untuk menampilkan alert hanya jika belum pernah muncul
        if (data?.status === "false" && !isAlertShown) {
            const result = alertConfirm(
                "Ada seseorang yang meninggalkan transaksi, apakah anda ingin melanjutkannya? (Klik OK untuk melanjutkan)",
            ).then((result) => {
                if (result.isConfirmed) {
                    const payload = {
                        nama: data?.nama_penerima,
                        email: data?.email,
                        nik: data?.nik,
                        alamat: data?.alamat,
                        fingerprintSertificate: data?.fingerprint,
                        uuid: uid,
                    };
                    console.log(payload);
                    createTransaksi(payload, response.data[0].transaksi_id);
                } else {
                    alertConfirm("Apakah anda yakin ingin menghapus transaksi ini?").then((result) => {
                        if (result.isConfirmed) {
                            hapusTransaksi(data?.transaksi_id);
                        }
                    });
                }
            }
            );
            setIsAlertShown(true); // Tandai bahwa alert sudah muncul
        }
    } catch (error) {
        console.log(error);
    }
    setLoading(false);
};

useEffect(() => {
    const email = localStorage.getItem("email");
    const uid = localStorage.getItem("uid");
    if (email) {
        checkTransaction(email, uid);

        const interval = setInterval(() => {
            checkTransaction(email, uid);
        }, 5000);

        return () => clearInterval(interval);
    }
}, []);

    return (
        <CheckTransactionContext.Provider value={{ transaction, loading }}>
            {children}
        </CheckTransactionContext.Provider>
    )
}
