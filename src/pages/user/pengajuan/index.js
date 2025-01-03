import React, { useEffect, useState } from 'react'
import RootLayout from '@/components/global/layout/RootLayout'
import { useRouter } from 'next/router'
import * as yup from 'yup'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { alertSuccess, alertError, alertConfirm } from '@/utils/callAlert'
import { PengajuanApi } from '@/services/pengajuan'
import { NotifikasiApi } from '@/services/notifikasi'

const Pengajuan = () => {
  const router = useRouter();
  const { submitPengajuan } = PengajuanApi();
  const { sendNotificationToUser } = NotifikasiApi();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    notelp: '',
    nik: '',
    alm: '',
    sertif: null,
    ktp: null
  })
  const [uuid, setUuid] = useState('')

  useEffect(() => {
    console.log("disini")
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

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    notelp: yup.string().required().test('len', 'Must be exactly 12 characters', val => val.toString().length === 12),
    nik: yup.number().required().test('len', 'Must be exactly 16 characters', val => val.toString().length === 16),
    alm: yup.string().required(),
  })


  const handleSubmit = async (values, { setSubmitting }) => {
    const result = await alertConfirm('Apakah Anda yakin ingin mengirim data ini?');
    if (result.isConfirmed) {
      try {
        console.log('Mengirim notifikasi...')
        const formDatas = new FormData();
        formDatas.append('nama', values.name);
        formDatas.append('email', values.email);
        formDatas.append('no_hp', values.notelp);
        formDatas.append('alamat', values.alm);
        formDatas.append('nik', values.nik);
        formDatas.append('sertifikat', formData.sertif);
        formDatas.append('ktp', formData.ktp);
        formDatas.append('uuid', uuid);
  
        const response = await submitPengajuan(formDatas);
  
        if (response.success) {
          alertSuccess('Pengajuan berhasil!');
          await sendNotificationToUser(uuid, 'Pengajuan Berhasil', 'Sertifikat Anda berhasil dibuat.');
          router.push('/user/dashboard');
        } else {
          alertError(`Pengajuan gagal: ${response.message || 'Terjadi kesalahan saat memproses pengajuan.'}`);
          await sendNotificationToUser(uuid, 'Pengajuan Gagal', response.message || 'Terjadi kesalahan saat memproses pengajuan.');
        }
        console.log('Notifikasi Berhasil Dikirim')
      } catch (error) {
        const errorMessage = error.message || error || 'Kesalahan tidak diketahui';
        alertError(`Terjadi kesalahan: ${errorMessage}`);
        console.error('Detail error:', error);
        await sendNotificationToUser(uuid, 'Pengajuan Error', `Terjadi kesalahan: ${errorMessage}`);
      }
      setSubmitting(false);
    }
  };
  


      // const handleSubmit = async (values, {setSubmitting}) => {
  
      //     const result = await alertConfirm('Apakah Anda yakin ingin mengirim data ini?');
      //     if (result.isConfirmed) {
      //       try {
      //         const formDatas = new FormData();
      //         formDatas.append('nama', values.name);
      //         formDatas.append('email', values.email);
      //         formDatas.append('no_hp', values.notelp);
      //         formDatas.append('alamat', values.alm);
      //         formDatas.append('nik', values.nik);
      //         formDatas.append('sertifikat', formData.sertif);
      //         formDatas.append('ktp', formData.ktp);
      //         formDatas.append('uuid',uuid);
      //         // throw Error("test")
      //         const response = await submitPengajuan(formDatas);
      //         console.log("submit redsponse", response)
      //         if (response.success) {
                
      //           alertSuccess('Pengajuan berhasil!');
      //           // await sendNotificationToUser(uuid, 'Pengajuan Berhasil' , 'Sertifikat Anda berhasil dibuat.');
      //           //router.push('/user/dashboard');
      //         } 
      //         else {
      //           // alertError(`Pengajuan gagal!`, console.error(error));
      //           console.error(response)
      //           alertError(`Pengajuan gagal! ${response.message}`, );
      //           console.log(response)
      //           // await sendNotificationToUser(uuid, 'Pengajuan Gagal', response || 'Terjadi kesalahan saat memproses pengajuan.');
      //           // router.push('/user/pengajuan');
      //         }
      //       } catch (error) {
      //         // const errorMessage = error?.message || 'Kesalahan tidak diketahui'; // Pastikan pesan error selalu ada
      //         alertError(`Terjadi kesalahan: ${error.message}`); 
      //         // console.error('Detail error:', error); // Tampilkan detail error untuk debugging
      //         // await sendNotificationToUser(uuid, 'Pengajuan Error', `Terjadi kesalahan: ${errorMessage}`);
      //       }
      //       // catch (error) {
      //       //   alertError(`Terjadi kesalahan: ${error.message}`); 
      //       //   console.error(error);
      //       //   await sendNotificationToUser(uuid, 'Pengajuan Error', `Terjadi kesalahan: ${error.message}`);
      //       // }
      //     }
      //   };

        const handleFileChange = (e) => {
          const file = e.target.files[0];
          if(file){
            setFormData({
              ...formData,
              [e.target.name] : file
            })
          }
        }
  
  return (
    <RootLayout>
      <div className='px-10 py-5'>
      <h1 className='	text-center mb-5 text-3xl'><b>PERMOHONAN KEAMANAN SERTIFIKAT</b></h1>
      <Formik
        initialValues={formData}
        validationSchema={schema}
        onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form>
            <div className='flex w-full gap-10'>
            <div className='flex flex-col gap-3 w-full p-2'>
              <label for="name">Nama Lengkap</label>
              <Field className="border border-black text-sm rounded-lg outline-none p-2" type="text" id="fname" name="name"/>
              <ErrorMessage name="name" component={'p'} className='text-red-500' />
            </div>
            <div className='flex flex-col gap-3 w-full p-2'>
              <label for="email">Email</label>
              <Field className="border border-black rounded-lg outline-none p-2" type="text" id="email" name="email"/>
              <ErrorMessage name="email" component={'p'} className='text-red-500' />
            </div>
            </div>
            <div className='flex w-full gap-10'>
            <div className='flex flex-col gap-3 w-full p-2'>
              <label for="notelp">Nomor Telepon</label>
              <Field className="border border-black rounded-lg outline-none p-2" type="text" id="notelp" name="notelp"/>
              <ErrorMessage name="notelp" component={'p'} className='text-red-500' />
            </div>
            <div className='flex flex-col gap-3 w-full p-2'>
              <label for="nik">NIK</label>
              <Field className="border border-black rounded-lg outline-none p-2" type="text" id="nik" name="nik"/>
              <ErrorMessage name="nik" component={'p'} className='text-red-500' />
            </div>
            </div>
            <div className='flex flex-col gap-3 w-full p-2'>
              <label for="alm">Alamat</label>
              {/* Textarea */}
              <Field className="border border-black rounded-lg outline-none p-2" type="text" id="alm" name="alm"/>
              <ErrorMessage name="alm" component={'p'} className='text-red-500' />
            </div>
            <div className='flex flex-col gap-3 p-2'>
              <label for="notelp">File Sertifikat</label>
              <Field className="border border-black rounded-lg outline-none p-2" type="file" id="sertif" name="sertif" onChange={(e) => handleFileChange(e, setFieldValue)} />
              <ErrorMessage name="sertif" component={'p'} className='text-red-500' />
            </div>
            <div className='flex flex-col gap-3 p-2'>
              <label for="notelp">File KTP</label>
              <Field className="border border-black rounded-lg outline-none p-2" type="file" id="ktp" name="ktp" onChange={(e) => handleFileChange(e, setFieldValue)}/>
              <ErrorMessage name="ktp" component={'p'} className='text-red-500' />
            </div>
            <div className='grid'>
              <button type="submit" disabled={isSubmitting} className='p-4 bg-blue-500 flex justify-self-end items-end rounded-3xl text-white px-6 py-2' ><b>SUBMIT</b></button>
            </div>
          </Form>
          )}
        </Formik>
      </div>
    </RootLayout>
  )
}

export default Pengajuan