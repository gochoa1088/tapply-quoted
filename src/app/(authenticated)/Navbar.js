"use client";
import { useAuth } from "@/context/AuthContext";
import { logout } from "@/firebase/firebaseAuth";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { authedUser } = useAuth();

  const handleLogout = async () => {
    await logout();
  };
  return (
    <nav className="bg-secondary px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/home" className="text-primary font-bold sm:text-lg mr-4">
            Home
          </Link>
          <Link
            href="/add-quote"
            className="bg-buttonPrimary hover:bg-buttonSecondary text-white font-bold py-2 px-4 rounded text-sm sm:text-base"
          >
            Create Quote
          </Link>
        </div>
        <div className="flex items-center">
          <Link
            href={`/${authedUser?.uid}`}
            className="text-primary mr-4 text-sm sm:text-base"
          >
            Profile
          </Link>
          <button
            onClick={handleLogout}
            className="text-primary mr-2 text-sm sm:text-base"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
