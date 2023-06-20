"use client";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

const SettingsLink = ({ userId }) => {
  const { authedUser } = useAuth();
  const isSessionedUserPage = authedUser.uid === userId;
  return (
    isSessionedUserPage && (
      <Link
        className="w-2/3 text-center font-semibold text-sm p-2 bg-primary rounded-md text-primary
  border border-slate-400 hover:border-slate-600 hover:bg-highlight sm:w-1/3"
        href={`/${userId}/settings`}
      >
        Edit profile
      </Link>
    )
  );
};

export default SettingsLink;