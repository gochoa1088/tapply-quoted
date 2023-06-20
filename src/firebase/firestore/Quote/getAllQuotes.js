import { firestore } from "@/firebase/firebase.config";
import { collection, query, orderBy, getDocs } from "firebase/firestore";

export default async function getAllQuotes() {
  try {
    const q = query(
      collection(firestore, "quotes"),
      orderBy("createdAt", "desc")
    );
    const querySnapshot = await getDocs(q);
    const quotes = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      data.createdAt = data.createdAt.toDate();
      return data;
    });
    return quotes;
  } catch (error) {
    throw e;
  }
}
