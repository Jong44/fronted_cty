import Head from 'next/head';
import React from 'react';
import Header from '@/components/global/layout/Header';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Index = ({ children }) => {
  const router = useRouter();

  const menuData = [
    {
      id: 1,
      title: 'Account Settings',
      link: '/user/account_setting',
    },
    {
      id: 2,
      title: 'Security & Privacy',
      link: '/user/security_setting',
    },
    {
      id: 3,
      title: 'Notification',
      link: '/user/notification_setting',
    },
  ];

  return (
    <>
      <Head>
        <title>User</title>
      </Head>
      <div className="h-screen flex flex-col overflow-hidden">
        <div className="flex-none">
          <Header />
        </div>

        <div className="flex flex-1">
          <aside className="w-[15rem] bg-primary text-white flex flex-col justify-between h-full">
            <div className="text-center py-6">
              <Image
                src="/assets/icons/DINO.jpeg"
                alt="Profile Picture"
                width={80}
                height={80}
                className="rounded-full mx-auto"
              />
              <h3 className="font-semibold text-lg mt-4">Shazia Mirza</h3>
              <button className="mt-1 text-sm text-blue-200 flex items-center justify-center mx-auto gap-1">
                <Image
                  src="/assets/icons/edit.svg"
                  alt="Edit Icon"
                  width={14}
                  height={14}
                />
                Edit
              </button>
            </div>

            <div className="flex-grow">
              {menuData.map((menu, index) => (
                <Link href={menu.link} key={index}>
                  <div
                    className={`px-5 py-3 flex items-center gap-4 text-sm ${
                      router.pathname === menu.link ? 'bg-blue-700' : ''
                    } hover:bg-blue-600 cursor-pointer`}
                  >
                    <span>{menu.title}</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-3 px-5 py-4 bg-primary cursor-pointer hover:bg-blue-700">
              <Image
                src="/assets/icons/logout.svg"
                alt="Logout Icon"
                width={20}
                height={20}
              />
              <span>Keluar</span>
            </div>
          </aside>
          <main className="flex-1 bg-gray-100 p-4">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default Index;
