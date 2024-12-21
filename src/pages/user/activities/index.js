import React, { useEffect, useState } from 'react';
import RootLayout from '@/components/global/layout/RootLayout';
import { AktivitasApi } from '@/services/aktivitas';
import formatDate from '@/utils/formatDate';
import Skeleton from 'react-loading-skeleton';

const Activities = () => {
    const [dataAktivitas, setDataAktivitas] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchAktivitas = async () => {
            setLoading(true);
            const data = await AktivitasApi().getAktivitasByUid("239181d2-1724-4aa3-9224-949912e8f2f3");
            setDataAktivitas(data.data);
            setLoading(false);
        };
        fetchAktivitas();
    }, []);
    return (
        <RootLayout>
            <div className="p-5">
                <h1 className="text-2xl font-bold mb-5">ACTIVITIES</h1>
                <div className="flex justify-end items-center mb-3 gap-3">
                    <button className="text-sm font-medium flex items-center gap-1">
                        <span className="text-lg font-bold">+</span> Add Filter
                    </button>
                    <button className="text-2xl font-bold">⋯</button>
                </div>

                <div className="border border-gray-300 rounded-md">
                    <table className="w-full border-collapse text-left">
                        <thead>
                            <tr className="border-b border-gray-300">
                                <th className="py-2 px-3 border-r border-gray-300 w-[5%] text-center">No</th>
                                <th className="py-2 px-3 border-r border-gray-300 w-1/4 text-center">Tanggal</th>
                                <th className="py-2 px-3 border-r border-gray-300 w-1/4 text-center">Detail</th>
                                <th className="py-2 px-3 border-r border-gray-300 w-1/4 text-center">Type</th>
                                <th className="py-2 px-3 w-1/3 text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                Array.from({ length: 3 }).map((_, i) => (
                                    <tr key={i}>
                                        <td className="px-3 py-2 text-center border-r"><Skeleton height={30} /></td>
                                        <td className="px-3 py-2 text-center border-r"><Skeleton height={30} /></td>
                                        <td className="px-3 py-2 text-center border-r"><Skeleton height={30} /></td>
                                        <td className="px-3 py-2 text-center border-r"><Skeleton height={30} /></td>
                                        <td className="px-3 py-2 text-center border-r"><Skeleton height={30} /></td>
                                    </tr>
                                ))

                            ) : (
                                dataAktivitas.map((item, index) => (
                                    <tr>
                                        <td className="px-3 py-2 text-center border-r">{index + 1}</td>
                                        <td className="px-3 py-2 text-center border-r">{item.detail}</td>
                                        <td className="px-3 py-2 text-center border-r">{item.activity_type}</td>
                                        <td className="px-3 py-2 text-center border-r">{formatDate(item.created_at)}</td>
                                        <td className="px-3 py-2 text-center border-r">{item.status}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-center mt-3">
                    <button className="px-2 py-1 border rounded mx-1">&lt;</button>
                    <button className="px-2 py-1 border rounded mx-1">&gt;</button>
                </div>
            </div>
        </RootLayout>
    );
};

export default Activities;
