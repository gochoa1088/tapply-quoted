import { firestore } from "@/firebase/firebase.config";
import { doc, deleteDoc } from "firebase/firestore";

export default async function deleteQuote(quoteId) {
  try {
    await deleteDoc(doc(firestore, "quotes", quoteId));
  } catch (error) {
    throw error;
  }
}
