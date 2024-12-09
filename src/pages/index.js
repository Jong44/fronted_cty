import Image from "next/image";
import localFont from "next/font/local";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/auth/login");
  }, []);
  return (
   <></>
  );
}
