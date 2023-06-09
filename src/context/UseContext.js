import React, { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);

const UseContext = ({ children }) => {
  // Create User with Email and Password //
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const user = {
    name: "Sazzad",
  };
  const authInfo = { user, createUser };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UseContext;
