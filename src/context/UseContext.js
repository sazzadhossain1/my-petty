import React, { createContext } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const UseContext = ({ children }) => {
  // Create User with Email and Password //
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // SignIn with Google //
  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };
  const user = {
    name: "Sazzad",
  };
  const authInfo = { user, createUser, signInWithGoogle };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UseContext;
