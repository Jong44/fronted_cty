import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'


const Index = () => {
  const router = useRouter();
  const menuData = [
    {
      id: 1,
      title: 'Account Settings',
      link: '/user/pengaturan/account_setting',
    },
    {
      id: 2,
      title: 'Security & Privacy',
      link: '/user/pengaturan/security_setting',
    },
    {
      id: 3,
      title: 'Notification',
      link: '/user/pengaturan/notification_setting',
    },
  ];

  return (
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
              className={`px-5 py-3 flex items-center gap-4 text-sm ${router.pathname === menu.link ? 'bg-blue-700' : ''
                } hover:bg-blue-600 cursor-pointer`}
            >
              <span>{menu.title}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-3 px-5 py-4 bg-primary cursor-pointer hover:bg-red-500">
        <Image
          src="/assets/icons/logout.svg"
          alt="Logout Icon"
          width={20}
          height={20}
        />
        <span>Keluar</span>
      </div>
    </aside>
  )
}

export default Index