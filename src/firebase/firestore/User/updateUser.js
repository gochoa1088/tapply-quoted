import { updateDoc, doc } from "firebase/firestore";
import { firestore } from "../../firebase.config";

export default async function updateUser(userId, data) {
  try {
    await updateDoc(doc(firestore, "users", userId), data);
  } catch (e) {
    throw e;
  }
}
