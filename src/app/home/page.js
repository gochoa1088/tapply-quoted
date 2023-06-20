"use client";
import { useAuth } from "@/context/AuthContext";
import { logout } from "@/firebase/firebaseAuth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Home = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user === null) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [user]);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="flex flex-col">
      Home
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default Home;
