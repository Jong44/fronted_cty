import React from 'react'
import RootLayout from '@/components/global/layout/RootLayout'

const Detail = () => {
  return (
    <RootLayout>
        <main>
            <div>
                <h2 className="text-center text-2xl"><b>DETAIL SERTIFIKAT</b></h2>
                <img className='w-80 mx-auto p-4' src="/assets/icons/sertifikat.png" alt="sertifikat" />
            </div>
        </main>
    </RootLayout>
  )
}

export default Detail