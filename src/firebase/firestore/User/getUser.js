import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../../firebase.config";

export default async function getUser(userId) {
  const docRef = doc(firestore, "users", userId);
  try {
    const user = await getDoc(docRef);
    return user.data();
  } catch (e) {
    throw e;
  }
}
