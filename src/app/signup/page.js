"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signUpWithEmailAndPassword } from "@/firebase/firebaseAuth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      setError(null);
      await signUpWithEmailAndPassword(
        email,
        username,
        password,
        confirmPassword
      );

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
      <h1 className="my-10">
        Sign up for <span className="font-semibold text-secondary">Quoted</span>
      </h1>
      <form
        onSubmit={handleSignup}
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
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded w-full py-2 px-3 leading-tight sm:w-1/2 focus:outline-slate-400"
            id="username"
            type="text"
            placeholder="Enter username"
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
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border rounded w-full py-2 px-3 leading-tight sm:w-1/2 focus:outline-slate-400"
            id="confirmPassword"
            type="password"
            placeholder="Confirm password"
            required
          />
        </div>
        {error && <p className="text-sm mt-2 text-red-500">{error}</p>}
        <button className="w-full bg-buttonPrimary text-white py-2 px-3 rounded-lg mt-8 sm:w-1/2 hover:bg-buttonSecondary">
          Sign up
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
          Already have an account?
          <Link
            prefetch={false}
            className="no-underline mx-2 inline-block align-baseline font-semibold text-sm text-red-400 hover:text-red-500"
            href="/login"
          >
            Log in!
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Signup;
