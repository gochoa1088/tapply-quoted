import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen max-w-2xl items-center justify-between mx-auto p-6">
      <header className="mt-4">
        <h1>
          Welcome to <span className="font-bold text-secondary">Quoted</span>!
        </h1>
      </header>

      <p className="italic text-xs text-center sm:text-lg">
        &quot;When you give joy to other people, you get more joy in return. You
        should give a good thought to happiness that you can give out.&quot;
        <span className="inline-block font-semibold"> — Eleanor Roosevelt</span>
      </p>
      <div className="flex flex-col gap-3 sm:gap-2">
        <div className="relative h-20 overflow-clip rounded-lg sm:h-28">
          <span className="absolute text-2xl font-bold right-2 top-2">
            Find
          </span>
          <Image src="/ae.jpg" width={500} height={100} alt="einstein" />
        </div>
        <div className="relative h-20 overflow-clip rounded-lg sm:h-28">
          <span className="absolute text-2xl font-bold left-14 top-2">
            Share
          </span>
          <Image src="/frida.jpg" width={500} height={100} alt="frida" />
        </div>
        <div className="relative h-20 overflow-clip rounded-lg sm:h-28">
          <span className="absolute text-2xl font-bold right-2 top-2">
            Like
          </span>
          <Image src="/gandhi.jpg" width={500} height={100} alt="gandhi" />
        </div>
      </div>
      <div className="flex flex-col gap-2 mb-8 text-center">
        <Link
          className="bg-buttonPrimary text-white rounded-lg px-2 py-1 hover:bg-buttonSecondary"
          href="/login"
        >
          Login
        </Link>
        <p className="font-semibold">or</p>
        <Link
          className="bg-buttonPrimary text-white rounded-lg px-2 py-1 hover:bg-buttonSecondary"
          href="/signup"
        >
          Create an account
        </Link>
      </div>
    </main>
  );
}
