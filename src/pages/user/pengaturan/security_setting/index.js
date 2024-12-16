import Head from 'next/head';
import React from 'react';
import RootLayout from '@/components/global/layout/RootLayout';

const SecuritySetting = () => {
  return (
    <>
      <Head>
        <title>Account Setting</title>
      </Head>
      <RootLayout>
        <div className="px-7 py-10">
          <h1 className="text-left mb-5 text-3xl font-bold py-3">Change Password</h1>
          <form className="space-y-5 w-full">
            <div>
              <label htmlFor="recent" className="block font-bold mb-2 text-lg py-1">Your recent password</label>
              <input className="border border-black rounded-lg w-full p-3 text-sm" type="password" id="recent" name="recent" placeholder="Recent password"/>
            </div>
            <div>
              <label htmlFor="new" className="block font-bold mb-2 text-lg py-1">Your new password</label>
              <input className="border border-black rounded-lg w-full p-3 text-sm" type="password" id="new" name="new" placeholder="New password"/>
            </div>
            <div>
              <label htmlFor="newpass" className="block font-bold mb-2 text-lg py-1">Confirm your new password</label>
              <input className="border border-black rounded-lg w-full p-3 text-sm" type="password" id="newpass" name="newpass" placeholder="Confirm new password"/>
            </div>
            <div className="text-right py-10">
              <button type="submit" className="bg-blue-800 text-white font-bold px-8 py-2 rounded-lg">UPDATE</button>
            </div>
          </form>
        </div>
      </RootLayout>
    </>
  );
};

export default SecuritySetting;
