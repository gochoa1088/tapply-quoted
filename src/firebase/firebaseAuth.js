import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "./firebase.config";
import addUser from "./firestore/User/addUser";
import getUser from "./firestore/User/getUser";

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
    await addUser(user.uid, { email, username, id: user.uid });
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

export const loginInWithGoogle = async () => {
  const { user } = await signInWithPopup(auth, new GoogleAuthProvider());
  const userExists = await getUser(user.uid);
  if (!userExists) {
    await addUser(user.uid, {
      email: user.email,
      username: user.email.substring(0, user.email.indexOf("@")),
      id: user.uid,
      photo: user.photoURL,
    });
  }
};

export const logout = async () => await signOut(auth);
