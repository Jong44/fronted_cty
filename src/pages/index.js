import Image from "next/image";
import localFont from "next/font/local";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    localStorage.setItem("uid", "239181d2-1724-4aa3-9224-949912e8f2f3");
    router.push("/auth/login");
  }, []);
  return (
  <></>
  );
}
