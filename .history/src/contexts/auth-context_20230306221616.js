import { onAuthStateChanged } from "firebase/auth";
import { collection, query, where } from "firebase/firestore";
import { auth, db } from "../firebase-app/firebase-config";
const { createContext, useContext, useState, useEffect } = require("react");

const AuthContext = createContext();
function AuthProvider(props) {
  const [userInfo, setUserInfo] = useState({});
  const value = { userInfo, setUserInfo };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      const docRef = query(
        collection(db, "users"),
        where("email", "==", user.email)
      );
      setUserInfo(user);
    });
  }, []);
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}
function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useAuth must be used within AuthProvider");
  return context;
}
export { useAuth, AuthProvider };
