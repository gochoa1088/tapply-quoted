import { storage } from "@/firebase/firebase.config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default async function uploadUserPhoto(userId, imageUpload) {
  const imageRef = ref(storage, `users/images/${userId}`);
  const validFileTypes = ["image/jpg", "image/jpeg", "image/png"];

  try {
    if (!imageUpload) {
      throw new Error("Please select an image.");
    }
    if (imageUpload.size > 1000000) {
      throw new Error("File size must be less than 1MB.");
    }
    if (!validFileTypes.find((type) => type === imageUpload.type)) {
      throw new Error("File type must be .jpg, .jpeg, or .png.");
    }
    const snapshot = await uploadBytes(imageRef, imageUpload);
    const url = await getDownloadURL(snapshot.ref);
    return url;
  } catch (e) {
    throw e;
  }
}
