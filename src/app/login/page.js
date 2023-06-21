"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  loginInWithGoogle,
  loginWithEmaiAndPassword,
} from "@/firebase/firebaseAuth";
import { useAuth } from "@/context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { authedUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (authedUser) {
      router.push("/quotes");
    } else {
      setLoading(false);
    }
  }, [authedUser]);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await loginWithEmaiAndPassword(email, password);
      return router.push("/quotes");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginInWithGoogle();
      return router.push("/quotes");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <main className="flex flex-col min-h-screen max-w-2xl items-center justify-between mx-auto p-6">
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center z-50 backdrop-blur-sm">
          <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
      <h1 className="my-10">
        Sign in to <span className="font-semibold text-secondary">Quoted</span>
      </h1>
      <form
        onSubmit={handleLogin}
        className="flex flex-col w-full items-center"
      >
        <div className="flex flex-col gap-2 w-full items-center">
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded w-full py-2 px-3 leading-tight sm:w-1/2 focus:outline-slate-400"
            id="email"
            type="email"
            placeholder="Enter email"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded w-full py-2 px-3 leading-tight sm:w-1/2 focus:outline-slate-400"
            id="password"
            type="password"
            placeholder="Enter password"
            required
          />
        </div>
        {error && <p className="text-sm mt-2 text-red-500">{error}</p>}
        <button className="w-full bg-buttonPrimary text-white py-2 px-3 rounded-lg mt-8 sm:w-1/2 hover:bg-buttonSecondary">
          Log in
        </button>
      </form>
      <div className="flex flex-col items-center">
        <p className="font-semibold">-or-</p>
        <button
          onClick={handleGoogleLogin}
          className="flex bg-buttonPrimary text-white py-2 px-3 rounded-lg mt-4 hover:bg-buttonSecondary"
        >
          <Image
            src="/googlelogo.png"
            height={20}
            width={20}
            className="mr-2"
            alt="google"
          />
          Continue with Google
        </button>
      </div>
      <div className="w-full max-w-sm mb-20 rounded-sm shadow p-5 text-center">
        <p className="font-semibold text-sm">
          New to Quoted?
          <Link
            prefetch={false}
            className="no-underline mx-2 inline-block align-baseline font-semibold text-sm text-red-400 hover:text-red-500"
            href="/signup"
          >
            Create an account!
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
