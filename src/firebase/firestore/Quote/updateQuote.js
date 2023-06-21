import { updateDoc, doc } from "firebase/firestore";
import { firestore } from "../../firebase.config";

export default async function updateQuote(quoteId, data) {
  try {
    await updateDoc(doc(firestore, "quotes", quoteId), data);
  } catch (e) {
    throw e;
  }
}
