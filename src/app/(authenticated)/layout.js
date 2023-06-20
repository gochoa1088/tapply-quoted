"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
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

  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen max-w-2xl items-center justify-between mx-auto p-6">
        {loading ? <div>Loading...</div> : children}
      </main>
    </>
  );
};

export default AuthenticatedLayout;
