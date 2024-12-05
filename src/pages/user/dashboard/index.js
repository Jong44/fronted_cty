import React from 'react'
import RootLayout from '@/components/global/layout/RootLayout'
import CardPrimary from '@/components/global/CardPrimary'

const Dashboard = () => {
  return (
    <RootLayout>
      <main className='px-10 py-5 md:flex gap-10'>
        <div className='flex flex-col gap-5'>
          <CardPrimary />
          <CardPrimary />
          <CardPrimary />
        </div>
        <div className='flex-1'>
          <div className='shadow-md rounded-md bg-white w-full h-[33rem] p-4'>
            index
          </div>
        </div>
      </main>
    </RootLayout>
  )
}

export default Dashboard