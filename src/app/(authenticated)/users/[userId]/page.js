import getUser from "@/firebase/firestore/User/getUser";
import Image from "next/image";
import React from "react";
import SettingsLink from "./SettingsLink";

const Profile = async ({ params: { userId } }) => {
  const userData = await getUser(userId);
  const { firstName, photo, username, email, favoriteQuote } = userData;
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-headingColor font-semibold pb-2 mb-4 border-b border-borderprimary sm:w-full">
        {username}
      </h1>
      <div className="flex flex-col sm:flex-row sm:gap-8">
        <Image
          src={photo || "/default-photo.jpg"}
          className="my-6 rounded-full self-center w-48 h-48 sm:self-start sm:ml-2"
          width={192}
          height={192}
          priority
          alt={username}
        />
        <div className="flex flex-col gap-4 py-2">
          <p className="text-center italic my-8 text-secondary sm:text-start sm:justify-end sm:my-2">
            {favoriteQuote}
          </p>
          <div className="flex flex-col sm:items-end sm:mt-8">
            {firstName && <h1 className="font-semibold">{firstName}</h1>}
            <h2 className="text-secondary">{username}</h2>
            <p className="truncate mb-2">
              <span className="mr-2">&#9993;</span>
              {email}
            </p>
            <SettingsLink userId={userId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
