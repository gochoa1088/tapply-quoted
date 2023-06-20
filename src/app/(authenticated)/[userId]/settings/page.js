import getUser from "@/firebase/firestore/User/getUser";
import Link from "next/link";
import React from "react";

async function fetchUser(userId) {
  const res = await getUser(userId);
  return res;
}

const UserSettings = async ({ params: { userId } }) => {
  const userData = await fetchUser(userId);
  console.log(userData);
  const { firstName, lastName, photo, username, id } = userData;

  return (
    <form
      className="flex flex-col flex-grow self-center w-full
    rounded-sm max-w-6xl sm:max-h-full"
      //   onSubmit={handleSubmit}
    >
      <h1 className="text-headingColor font-semibold pb-2 mb-4 border-b border-borderprimary">
        Public profile
      </h1>
      <div className="flex flex-col-reverse justify-between sm:flex-row">
        <div className="w-full sm:w-1/2">
          <div className="flex flex-col justify-between sm:flex-row sm:gap-4">
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
              placeholder="Enter first name"
              defaultValue={firstName}
            />
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
              placeholder="Enter last name"
              defaultValue={lastName}
            />
          </div>
          <div className="flex justify-between">
            <div className="w-2/3">
              {/* <FormField
                label="Email"
                id="email"
                type="text"
                placeholder={email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              /> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full mb-8 sm:w-1/2 sm:ml-12 sm:mb-0">
          <label className="block font-bold self-start text-headingColor mb-4 text-sm sm:ml-16 sm:mb-2">
            Profile picture
          </label>
          <div className="relative w-40 h-40 rounded-full sm:w-56 sm:h-56 sm:mt-12">
            <img
              src={photo}
              className="w-40 h-40 rounded-full sm:w-56 sm:h-56"
              height={224}
              width={224}
              alt={username}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <label className="block font-bold text-headingColor mb-2 text-sm">
          Favorite quote
        </label>
        {/* <ReactQuill
          value={readme}
          onChange={setReadme}
          modules={basicModules}
          theme="snow"
        /> */}
      </div>
      <div className="flex justify-center align-center gap-5 mt-5 sm:justify-end">
        <button
          className="w-1/4 min-w-[84px] text-sm bg-buttonPrimary hover:bg-buttonSecondary text-white 
      font-bold py-2 px-4 rounded-md focus:shadow-outline sm:w-1/6 sm:text-base"
        >
          Save
        </button>
        <Link
          href={`/${id}`}
          className="w-1/4 min-w-[84px] no-underline text-sm text-center hover:bg-highlight border-2 
      text-primary font-bold py-2 px-4 rounded-md focus:shadow-outline sm:w-1/6 sm:text-base"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default UserSettings;
