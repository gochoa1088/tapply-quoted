"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  loginInWithGoogle,
  loginWithEmaiAndPassword,
} from "@/firebase/firebaseAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await loginWithEmaiAndPassword(email, password);
      return router.push("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginInWithGoogle();
      return router.push("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <main className="flex flex-col min-h-screen max-w-2xl items-center justify-between mx-auto p-6">
      <h1 className="text-4xl my-10">
        Sign in to <span className="font-semibold">Quoted</span>
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
        <button className="w-full bg-slate-200 py-2 px-3 rounded-lg border border-slate-500 mt-8 sm:w-1/2 hover:bg-slate-300">
          Log in
        </button>
      </form>
      <div className="flex flex-col items-center">
        <p className="font-semibold">-or-</p>
        <button
          onClick={handleGoogleLogin}
          className="flex bg-blue-200 py-2 px-3 rounded-lg border border-slate-500 mt-4 hover:bg-blue-300"
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
