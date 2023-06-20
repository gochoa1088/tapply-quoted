import getUser from "@/firebase/firestore/User/getUser";
import React from "react";
import SettingsForm from "./SettingsForm";

async function fetchUser(userId) {
  const res = await getUser(userId);
  return res;
}

const UserSettings = async ({ params: { userId } }) => {
  const userData = await fetchUser(userId);
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-headingColor font-semibold pb-2 mb-4 border-b border-borderprimary">
        Public profile settings
      </h1>
      <SettingsForm user={userData} />;
    </div>
  );
};

export default UserSettings;
