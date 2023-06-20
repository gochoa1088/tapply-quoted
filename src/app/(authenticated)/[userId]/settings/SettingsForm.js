"use client";

import updateUser from "@/firebase/firestore/User/updateUser";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SettingsForm = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName || "");
  const [lastName, setLastName] = useState(user.lastName || "");
  const [favoriteQuote, setFavoriteQuote] = useState(user.favoriteQuote || "");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser(user.id, { firstName, lastName, favoriteQuote });
    router.push(`/${user.id}`);
  };

  return (
    <form
      className="flex flex-col self-center w-full rounded-sm max-w-6xl sm:max-h-full"
      onSubmit={handleSubmit}
    >
      <h1 className="text-headingColor font-semibold pb-2 mb-4 border-b border-borderprimary">
        Public profile
      </h1>
      <div className="flex flex-col-reverse justify-between sm:flex-row">
        <div className="flex flex-col w-full sm:w-1/2 gap-2 sm:gap-4">
          <div>
            <label
              className="block font-bold text-headingColor mb-2 text-sm"
              htmlFor="firstName"
            >
              First name
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-primary leading-tight focus:outline-slate-400"
              id="firstName"
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter first name"
              value={firstName}
            />
          </div>
          <div>
            <label
              className="block font-bold text-headingColor mb-2 text-sm"
              htmlFor="firstName"
            >
              Last name
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-primary leading-tight focus:outline-slate-400"
              id="lastName"
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter last name"
              value={lastName}
            />
          </div>
        </div>
        <div className="flex flex-col items-center w-full mb-8 sm:w-1/2 sm:ml-12 sm:mb-0">
          <label className="block font-bold self-start text-headingColor mb-4 text-sm sm:ml-16 sm:mb-2">
            Profile picture
          </label>
          <div className="relative w-40 h-40 rounded-full sm:w-56 sm:h-56 sm:mt-6">
            <img
              src={user.photo}
              className="w-40 h-40 rounded-full sm:w-56 sm:h-56"
              height={224}
              width={224}
              alt={user.username}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-2">
        <label
          className="block font-bold text-headingColor mb-2 text-sm"
          htmlFor="favoriteQuote"
        >
          Favorite quote
        </label>
        <textarea
          className="border rounded w-full py-2 px-3 text-primary leading-tight focus:outline-slate-400"
          placeholder="Enter your favorite quote"
          onChange={(e) => setFavoriteQuote(e.target.value)}
          value={favoriteQuote}
          rows={8}
        />
      </div>
      <div className="flex justify-center align-center gap-5 mt-5 sm:justify-end">
        <button
          className="w-1/4 min-w-[84px] text-sm bg-buttonPrimary hover:bg-buttonSecondary text-white 
  font-bold py-2 px-4 rounded-md focus:shadow-outline sm:w-1/6 sm:text-base"
        >
          Save
        </button>
        <Link
          href={`/${user.id}`}
          className="w-1/4 min-w-[84px] no-underline text-sm text-center hover:bg-highlight border-2 
  text-primary font-bold py-2 px-4 rounded-md focus:shadow-outline sm:w-1/6 sm:text-base"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default SettingsForm;
