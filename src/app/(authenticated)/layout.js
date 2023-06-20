"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

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
      <div>Loading...</div>
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
