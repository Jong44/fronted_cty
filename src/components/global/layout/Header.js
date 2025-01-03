import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Index = () => {
  const router = useRouter()
  const handleNotification = () => {
    router.push('/user/notifikasi')
  }
  
  const handleUser  = async () => {
    const uid = getCurrentUser;
    try {
      const response = await axios.put(`updateUser /${uid}`, {
      });
      console.log('User  updated:', response.data);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };


  return (
    <header className="shadow-md p-4 fixed top-0 left-0 w-full bg-white z-10 flex justify-between items-center">
      <div>
        <Image src="/assets/logo.svg" alt="logo" width={120} height={120} />
      </div>
      <div className='flex items-center gap-6'>
        <Image src='/assets/icons/Doorbell.svg' alt="bell" width={30} height={30} className='cursor-pointer' onClick={handleNotification} />
        <p className='text-lg font-bold'>John Doe</p>
        <div className='w-14 h-14 rounded-full bg-gray-300'></div>
      </div>
    </header>
  )
}

export default Index