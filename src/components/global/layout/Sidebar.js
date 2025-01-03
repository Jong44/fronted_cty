import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();

  const menuData = [
    {
      id: 1,
      title: "Dashboard",
      icon: "Monitor.svg",
      link: "/user/dashboard",
    },
    {
      id: 2,
      title: "Pengajuan",
      icon: "Diploma.svg",
      link: "/user/pengajuan",
    },
    {
      id: 4,
      title: "Sertifikat",
      icon: "Cheque.svg",
      link: "/user/sertifikat",
    },
    {
      id: 5,
      title: "Activities",
      icon: "activities.svg",
      link: "/user/activities",
    },
  ];

  const accountMenuData = [
    {
      id: 1,
      title: "Pengaturan",
      icon: "setting.svg",
      link: "/user/pengaturan/account_setting",
    },
    {
      id: 2,
      title: "Keluar",
      icon: "logout.svg",
      link: "/auth/logout",
    },
  ];

  return (
    <aside className="w-[15rem] bg-primary text-white flex flex-col justify-between fixed top-[6.3rem] bottom-0 left-0 z-10">
      <div>
        {menuData.map((menu, index) => (
          <Link href={menu.link} key={index}>
            <div
              className={`px-10 py-5 flex gap-7 cursor-pointer transition-colors duration-300 ${
                router.pathname === menu.link ? "bg-[#5D91F5]" : ""
              }`}
            >
              <Image
                src={`/assets/icons/${menu.icon}`}
                alt="logo"
                width={25}
                height={25}
              />
              <h1 className="text-base font-medium">{menu.title}</h1>
            </div>
          </Link>
        ))}
      </div>
      <div>
        {accountMenuData.map((menu, index) => (
          <Link href={menu.link} key={index}>
            <div
              className={`px-10 py-5 flex gap-7 cursor-pointer transition-colors duration-300 ${
                router.pathname === menu.link
                  ? "bg-[#5D91F5]"
                  : menu.title === "Keluar"
                  ? "hover:bg-red-500"
                  : ""
              }`}
            >
              <Image
                src={`/assets/icons/${menu.icon}`}
                alt="logo"
                width={25}
                height={25}
              />
              <h1 className="text-base font-medium">{menu.title}</h1>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Index;
