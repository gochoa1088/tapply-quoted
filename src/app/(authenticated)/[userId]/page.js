import getUser from "@/firebase/firestore/User/getUser";
import React from "react";

async function fetchUser(userId) {
  const res = await getUser(userId);
  return res;
}

const Profile = async ({ params: { userId } }) => {
  const userData = await fetchUser(userId);
  const { firstName, lastName, photo, username, email } = userData;
  return (
    <div className="flex flex-col w-full px-2 sm:px-0">
      <img
        src={photo}
        className="my-6 rounded-full self-center w-48 h-48"
        width={192}
        height={192}
        alt={username}
      />
      <div className="py-2 lg:px-8">
        {firstName && <h1 className="font-semibold">{firstName}</h1>}
        <h2 className="text-secondary">{username}</h2>
      </div>
      {/* {isSessionedUserPage && (
        <div className="py-2 mb-4 lg:px-8">
          <button
            className="w-full font-semibold text-sm p-2 bg-primary rounded-md text-primary
  border border-slate-400 hover:border-slate-600 hover:bg-highlight"
            onClick={() => navigate(`/${username}/settings`)}
          >
            Edit profile
          </button>
        </div>
      )} */}
      <div className="flex py-1 overflow-hidden items-center lg:px-8">
        <p className="truncate">{email}</p>
      </div>
    </div>
  );
};

export default Profile;
