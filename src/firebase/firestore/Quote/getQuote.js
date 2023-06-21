import { firestore } from "@/firebase/firebase.config";
import { doc, getDoc } from "firebase/firestore";

export default async function getQuote(quoteId) {
  try {
    const docRef = doc(firestore, "quotes", quoteId);
    const docSnapshot = await getDoc(docRef);
    const quote = docSnapshot.data();
    if (!quote) {
      throw new Error("Quote not found.");
    }
    quote.createdAt = quote?.createdAt.toDate();
    return quote;
  } catch (error) {
    throw error;
  }
}
