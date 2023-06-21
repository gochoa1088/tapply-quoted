"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
export const dynamic = "force-dynamic";
export const revalidate = 0;

const AuthenticatedLayout = ({ children }) => {
  const { authedUser } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authedUser === null) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [authedUser]);

  return loading ? (
    <main className="flex flex-col max-w-2xl items-center justify-between mx-auto p-6">
      <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center z-50 backdrop-blur-sm">
        <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    </main>
  ) : (
    <>
      <Navbar />
      <main className="flex flex-col max-w-2xl items-center justify-between mx-auto p-6">
        {children}
      </main>
    </>
  );
};

export default AuthenticatedLayout;
