import getUser from "@/firebase/firestore/User/getUser";
import Image from "next/image";
import React from "react";
import SettingsLink from "./SettingsLink";

async function fetchUser(userId) {
  const res = await getUser(userId);
  return res;
}

const Profile = async ({ params: { userId } }) => {
  const userData = await fetchUser(userId);
  const { firstName, lastName, photo, username, email } = userData;
  return (
    <div className="flex flex-col w-full items-center px-2 sm:px-0">
      <Image
        src={photo}
        className="my-6 rounded-full w-48 h-48"
        width={192}
        height={192}
        priority
        alt={username}
      />
      <div className="py-2">
        {firstName && <h1 className="font-semibold">{firstName}</h1>}
        <h2 className="text-secondary">{username}</h2>
      </div>
      <SettingsLink userId={userId} />
      <div className="flex py-1 overflow-hidden items-center">
        <p className="truncate">
          <span className="mr-2">&#9993;</span>
          {email}
        </p>
      </div>
    </div>
  );
};

export default Profile;
