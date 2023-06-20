import { firestore } from "@/firebase/firebase.config";
import { collection, query, orderBy, getDocs } from "firebase/firestore";

export default async function getAllQuotes() {
  try {
    const q = query(
      collection(firestore, "quotes"),
      orderBy("createdAt", "asc")
    );
    const querySnapshot = await getDocs(q);
    const quotes = querySnapshot.docs.map((doc) => doc.data());
    return quotes;
  } catch (error) {
    throw e;
  }
}
