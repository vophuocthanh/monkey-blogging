import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase-app/firebase-config";

const HomePage = () => {
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <button>Sign out</button>
    </div>
  );
};

export default HomePage;
