import getUser from "@/firebase/firestore/User/getUser";
import React from "react";
import SettingsForm from "./SettingsForm";
// import getAllUsers from "@/firebase/firestore/User/getAllUsers";
export const dynamic = "force-dynamic";
export const revalidate = 0;
// export async function generateStaticParams() {
//   const users = await getAllUsers();

//   return users.map((user) => ({
//     userId: user.id,
//   }));
// }

const UserSettings = async ({ params: { userId } }) => {
  const userData = await getUser(userId);
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-headingColor font-semibold pb-2 mb-4 border-b border-borderprimary">
        Public profile settings
      </h1>
      <SettingsForm user={userData} />
    </div>
  );
};

export default UserSettings;
