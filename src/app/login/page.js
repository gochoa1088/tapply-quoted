import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <main className="flex flex-col min-h-screen max-w-2xl items-center justify-between mx-auto p-6">
      <h1 className="text-4xl my-10">
        Sign in to <span className="font-semibold">Quoted</span>
      </h1>
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
