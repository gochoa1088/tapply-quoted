import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "./firebase.config";
import addUser from "./firestore/User/addUser";

export const signInWithGoogle = async () =>
  signInWithPopup(auth, new GoogleAuthProvider());

export const signUpWithEmailAndPassword = async (
  email,
  username,
  password,
  confirmPassword
) => {
  try {
    if (password !== confirmPassword) {
      throw new Error("Passwords do not match.");
    }
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await addUser(user.uid, { email, username });
  } catch (e) {
    throw e;
  }
};

export const loginWithEmaiAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    throw e;
  }
};

export const logout = () => signOut(auth);
