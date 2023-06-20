import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "./firebase.config";

export const signInWithGoogle = async () =>
  signInWithPopup(auth, new GoogleAuthProvider());

export const signUpWithEmailAndPassword = async (email, password) => {
  let result = null;
  let error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
};

export const loginWithEmaiAndPassword = async (email, password) => {
  let result = null;
  let error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
};

export const logout = () => signOut(auth);
