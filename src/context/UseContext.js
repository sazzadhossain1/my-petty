import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const UseContext = ({ children }) => {
  const [user, setUser] = useState(null);
  // Create User with Email and Password //
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // SignIn with Google //
  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  // Get Current User //
  useEffect(() => {
    const unSubScribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser === null || currentUser) {
        setUser(currentUser);
      }
    });
    return () => unSubScribe();
  }, []);

  const authInfo = { user, createUser, signInWithGoogle };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UseContext;
