import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../../firebase.config";

export default async function getUser(userId) {
  const docRef = doc(firestore, "users", userId);
  try {
    const docSnapshot = await getDoc(docRef);
    const user = docSnapshot.data();
    if (!user) {
      throw new Error("User not found.");
    }
    return user;
  } catch (e) {
    throw e;
  }
}
