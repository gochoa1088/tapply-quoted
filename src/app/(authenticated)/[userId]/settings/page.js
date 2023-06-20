import getUser from "@/firebase/firestore/User/getUser";
import React from "react";
import SettingsForm from "./SettingsForm";

async function fetchUser(userId) {
  const res = await getUser(userId);
  return res;
}

const UserSettings = async ({ params: { userId } }) => {
  const userData = await fetchUser(userId);
  return <SettingsForm user={userData} />;
};

export default UserSettings;
