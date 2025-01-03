import Head from 'next/head'
import React from 'react'
import RootLayout from '@/components/global/layout/RootLayout'
import UserApi from '@/services/user/index'

const AccountSetting = () => {
  return (
    <>
        <Head>
            <title>Account Setting</title>
        </Head>
        <RootLayout>
        <div className="flex flex-1">
          <main className="flex-1 bg-gray-100 p-6">
            <h4 className="text-left mb-6 font-bold text-lg">Personal Information</h4>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-1">First Name</label>
                <input
                  type="text"
                  placeholder="Shazia"
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Last Name</label>
                <input
                  type="text"
                  placeholder="Mirza"
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Email</label>
                <input
                  type="email"
                  placeholder="shazia@gmail.com"
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Alamat</label>
                <input
                  type="text"
                  placeholder="Jl. Hasanuddin, Jakarta Raya"
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">No Telepon Aktif</label>
                <input
                  type="text"
                  placeholder="08123456789"
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                />
              </div>
            </div>
            <div className="mt-6 flex gap-4">
              <Link href={`/posts/edit/${post.id}`}>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">Update</button>
              </Link>
              <Link href={`/posts/edit/${post.id}`}>
              <button className="px-4 py-2 bg-red-500 text-black-700 rounded-md text-sm hover:bg-red-600">Cancel</button>
              </Link>
            </div>
          </main>
        </div>
        </RootLayout>
    </>
  )
}

export default AccountSetting