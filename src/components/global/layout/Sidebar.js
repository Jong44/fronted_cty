import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();
  const menuData = [
    {
      "id": 1,
      "title": "Dashboard",
      "icon": "Monitor.svg",
      "link": "/user/dashboard"
    },
    {
      "id": 2,
      "title": "Pengajuan",
      "icon": "Diploma.svg",
      "link": "/user/pengajuan"
    },
    {
      "id": 3,
      "title": "Transaksi",
      "icon": "Transaction.svg",
      "link": "/user/transaksi"
    },
    {
      "id": 4,
      "title": "Sertifikat",
      "icon": "Cheque.svg",
      "link": "/user/sertifikat"
    },
  ];

  const accountMenuData = [
    {
      "id": 1,
      "title": "Pengaturan",
      "icon": "setting.svg",
      "link": "/user/pengaturan"
    },
    {
      "id": 2,
      "title": "Keluar",
      "icon": "logout.svg",
      "link": "/user/logout"
    }
  ]
  return (
    <aside className="w-[15rem] bg-primary text-white flex flex-col justify-between">
      <div>
      {menuData.map((menu, index) => (
        <Link href={menu.link} key={index}>
          <div className={`px-10 py-5 flex gap-7 ${router.pathname === menu.link ? "bg-[#5D91F5]" : ''}`} key={index}>
            <Image src={`/assets/icons/${menu.icon}`} alt="logo" width={25} height={25} />
            <h1 className="text-base font-medium">{menu.title}</h1>
          </div>
        </Link>
      ))}
      </div>
      <div className="">
        {accountMenuData.map((menu, index) => (
          <Link href={menu.link} key={index}>
            <div className={`px-10 py-5 flex gap-7 ${router.pathname === menu.link ? "bg-[#5D91F5]" : ''}`} key={index}>
              <Image src={`/assets/icons/${menu.icon}`} alt="logo" width={25} height={25} />
              <h1 className="text-base font-medium">{menu.title}</h1>
            </div>
          </Link>
        ))}
      </div>

    </aside>
  )
}

export default Index