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
          <Link
            href="/quotes"
            className="text-primary text-sm font-bold hover:text-secondary sm:text-base"
          >
            Home
          </Link>
          <Link
            href="/quotes/add-quote"
            // className="bg-buttonPrimary hover:bg-buttonSecondary text-white font-bold py-2 px-4 rounded text-sm sm:text-base"
            className="w-fit self-end text-sm text-center bg-primary hover:bg-highlight border-2 
  text-primary font-bold py-2 px-4 ml-4 sm:ml-8 rounded-md focus:shadow-outline"
          >
            Create Quote
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href={`/users/${authedUser?.uid}`}
            className="text-primary text-sm font-semibold hover:text-secondary sm:text-base"
          >
            Profile
          </Link>
          <button
            onClick={handleLogout}
            className="text-primary text-sm font-semibold hover:text-secondary sm:text-base"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
