"use client";
import { useAuth } from "@/context/AuthContext";
import { logout } from "@/firebase/firebaseAuth";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { authedUser } = useAuth();
  const { uid } = authedUser;
  return (
    <nav className="bg-gray-800 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/home" className="text-white font-bold text-lg mr-4">
            Home
          </Link>
          <Link
            href="add-quote"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Create Quote
          </Link>
        </div>
        <div className="flex items-center">
          <Link href={`/${uid}`} className="text-white mr-4">
            Profile
          </Link>
          <button onClick={logout} className="text-white mr-4">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
