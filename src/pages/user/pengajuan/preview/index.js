import React, { useEffect, useState } from 'react';
import RootLayout from '@/components/global/layout/RootLayout';
import { useRouter } from 'next/router';
import Image from 'next/image';

const PengajuanPreview = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        notelp: '',
        nik: '',
        alm: '',
        sertif: '',
        ktp: ''
    });

    useEffect(() => {
        const data = localStorage.getItem('formPengajuan');
        if (data) {
            setFormData(JSON.parse(data));
        } else {
            router.push('/user/pengajuan');
        }
    }, []);


    return (
        <RootLayout>
            <div className='px-10 py-5'>
                <h1 className='text-center mb-5 text-3xl'><b>PREVIEW PERMOHONAN KEAMANAN SERTIFIKAT</b></h1>
                <form>
                    <div className='flex w-full gap-10'>
                        <div className='flex flex-col gap-3 w-full p-2'>
                            <label><b>Nama Lengkap:</b></label>
                            <h5>{formData?.name}</h5>
                        </div>
                        <div className='flex flex-col gap-3 w-full p-2'>
                            <label><b>Email:</b></label>
                            <p>{formData?.email}</p>
                        </div>
                    </div>
                    <div className='flex w-full gap-10'>
                        <div className='flex flex-col gap-3 w-full p-2'>
                            <label><b>Nomor Telepon:</b></label>
                            <h5>{formData?.notelp}</h5>
                        </div>
                        <div className='flex flex-col gap-3 w-full p-2'>
                            <label><b>NIK:</b></label>
                            <p>{formData?.nik}</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 w-full p-2'>
                        <label><b>Alamat:</b></label>
                        <h5>{formData?.alm}</h5>
                    </div>
                    <div className='flex w-full gap-10'>
                        <div className='flex flex-col gap-3 w-full p-2'>
                            <label><b>File Sertifikat:</b></label>
                            {/* <img src={formData?.sertif} alt="Certificate" className='w-1/2 h-auto border border-gray-300' /> */}
                            <Image src={formData?.sertif} alt="Certificate" width={200} height={200} />
                        </div>
                        <div className='flex flex-col gap-3 w-full p-2'>
                            <label><b>File KTP:</b></label>
                            <img src={formData?.ktp} alt="KTP" className='w-1/2 h-auto border border-gray-300' />
                        </div>
                    </div>
                    <div className='flex justify-between mt-5'>
                        <button onClick={() => router.push('/')} className='p-4 bg-gray-500 rounded-3xl text-white px-6 py-2'>
                            <b>BACK</b>
                        </button>
                        <button type="submit" className='p-4 bg-blue-500 rounded-3xl text-white px-6 py-2'>
                            <b>Next</b>
                        </button>
                    </div>
                </form>
            </div>
        </RootLayout>
    )
}

export default PengajuanPreview
