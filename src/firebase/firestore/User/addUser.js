import { setDoc, doc } from "firebase/firestore";
import { firestore } from "../../firebase.config";

export default async function addUser(userId, data) {
  try {
    await setDoc(doc(firestore, "users", userId), data);
  } catch (e) {
    throw e;
  }
}
