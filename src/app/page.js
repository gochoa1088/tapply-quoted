"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { authedUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (authedUser) {
      router.push("/quotes");
    } else {
      setLoading(false);
    }
  }, [authedUser]);
  return (
    <main className="flex flex-col min-h-screen max-w-2xl items-center justify-between mx-auto p-6">
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center z-50 backdrop-blur-sm">
          <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
      <header className="mt-4">
        <h1 className="text-3xl sm:text-4xl">
          Welcome to <span className="font-bold text-secondary">Quoted</span>!
        </h1>
      </header>

      <p className="italic text-xs text-center sm:text-lg">
        &quot;When you give joy to other people, you get more joy in return. You
        should give a good thought to happiness that you can give out.&quot;
        <span className="inline-block font-semibold"> — Eleanor Roosevelt</span>
      </p>
      <div className="flex flex-col gap-3 sm:gap-2">
        <div className="relative h-20 overflow-clip rounded-lg sm:h-28">
          <span className="absolute text-2xl font-bold right-2 top-2">
            Find
          </span>
          <Image src="/ae.jpg" width={500} height={100} alt="einstein" />
        </div>
        <div className="relative h-20 overflow-clip rounded-lg sm:h-28">
          <span className="absolute text-2xl font-bold left-14 top-2">
            Share
          </span>
          <Image src="/frida.jpg" width={500} height={100} alt="frida" />
        </div>
        <div className="relative h-20 overflow-clip rounded-lg sm:h-28">
          <span className="absolute text-2xl font-bold right-2 top-2">
            Like
          </span>
          <Image src="/gandhi.jpg" width={500} height={100} alt="gandhi" />
        </div>
      </div>
      <div className="flex flex-col w-full gap-2 mb-8 items-center text-center">
        <Link
          className="bg-buttonPrimary w-full text-white text-lg rounded-lg px-2 py-1 hover:bg-buttonSecondary sm:w-1/2"
          href="/login"
        >
          Proceed to login
        </Link>
        <p className="font-semibold">or</p>
        <Link
          className="bg-buttonPrimary w-full text-white text-lg rounded-lg px-2 py-1 hover:bg-buttonSecondary sm:w-1/2"
          href="/signup"
        >
          Create an account
        </Link>
      </div>
    </main>
  );
}
