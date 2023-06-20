import { Timestamp, addDoc, collection } from "firebase/firestore";
import { firestore } from "../../firebase.config";

export default async function addQuote(data) {
  try {
    await addDoc(collection(firestore, "quotes"), {
      createdAt: Timestamp.fromDate(new Date()),
      likes: 0,
      ...data,
    });
  } catch (e) {
    throw e;
  }
}
