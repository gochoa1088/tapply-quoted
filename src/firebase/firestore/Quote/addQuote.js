import { Timestamp, setDoc, doc } from "firebase/firestore";
import { firestore } from "../../firebase.config";

export default async function addQuote(quoteId, data) {
  try {
    await setDoc(doc(firestore, "quotes", quoteId), {
      createdAt: Timestamp.fromDate(new Date()),
      likes: 0,
      ...data,
    });
  } catch (e) {
    throw e;
  }
}
