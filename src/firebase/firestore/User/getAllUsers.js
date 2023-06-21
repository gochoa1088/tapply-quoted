import { firestore } from "@/firebase/firebase.config";
import { collection, query, getDocs } from "firebase/firestore";

export default async function getAllUsers() {
  try {
    const q = query(collection(firestore, "users"));
    const querySnapshot = await getDocs(q);
    const users = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return data;
    });
    return users;
  } catch (error) {
    throw e;
  }
}
