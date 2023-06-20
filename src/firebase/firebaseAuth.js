import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

import { auth } from "./clientApp";

export const signInWithGoogle = async () =>
  signInWithPopup(auth, new GoogleAuthProvider());

export const signUpWithEmailAndPassword = async (email, password) => {};

export const loginWithEmaiAndPassword = async (email, password) => {};

export const logout = () => signOut(auth);
