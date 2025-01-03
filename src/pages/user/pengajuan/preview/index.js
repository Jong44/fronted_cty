import React, { useEffect, useState } from 'react';
import RootLayout from '@/components/global/layout/RootLayout';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { alertSuccess, alertError, alertConfirm } from '@/utils/callAlert'
import { PengajuanApi } from '@/services/pengajuan';

const PengajuanPreview = () => {
    const router = useRouter();
    const { submitPengajuan } = PengajuanApi();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        notelp: '',
        nik: '',
        alm: '',
        sertif: '',
        ktp: ''
    });
    const [uuid, setUuid] = useState('')

    useEffect(() => {
        const uid = localStorage.getItem('uid');
        if(uid){
            setUuid(uid);
        }
        const data = localStorage.getItem('formPengajuan');
        if (data) {
            setFormData(JSON.parse(data));
        } else {
            router.push('/user/pengajuan');
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await alertConfirm('Apakah Anda yakin ingin mengirim data ini?');
        if (result.isConfirmed) {
          try {
            const formDatas = new FormData();
            formDatas.append('nama', formData.name);
            formDatas.append('email', formData.email);
            formDatas.append('no_hp', formData.no_hp);
            formDatas.append('alamat', formData.alamat);
            formDatas.append('nik', formData.nik);
            formDatas.append('sertifikat', formData.sertifikat);
            formDatas.append('ktp', formData.ktp);
            formDatas.append('uuid',uuid);

            const response = await submitPengajuan(formDatas);
    
            if (response.success) {
              alertSuccess('Pengajuan berhasil!');
              router.push('/user/dashboard');
            } else {
              alertError(response.message || 'Pengajuan gagal!');
              router.push('/user/pengajuan');
            }
          } catch (error) {
            alertError(`Terjadi kesalahan: disini`, console.error(error));
          }
        }
      };

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
                        <button type="submit" onClick={handleSubmit} className='p-4 bg-blue-500 rounded-3xl text-white px-6 py-2'>
                            <b>SUBMIT</b>
                        </button>
                    </div>
                </form>
            </div>
        </RootLayout>
    )
}

export default PengajuanPreview
