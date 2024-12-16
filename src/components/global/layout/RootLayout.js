import Head from 'next/head'
import React from 'react'
import Sidebar from '@/components/global/layout/Sidebar'
import Header from '@/components/global/layout/Header'
import SettingSidebar from '@/components/global/layout/SettingSidebar'
import { useRouter } from 'next/router'


const Index = ({children}) => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>User</title>
      </Head>
      <div className="">
        <Header/>
        <div className="flex">
          {router.pathname.includes('pengaturan') ? <SettingSidebar /> : <Sidebar />}
          <main className="flex-1 bg-background p-4 fixed top-[6.3rem] bottom-0 left-[15rem] right-0 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </>
  )
}

export default Index