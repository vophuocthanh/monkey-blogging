import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase-app/firebase-config";

const AuthorBox = ({ userId = "" }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    async function fetchUserData() {
      const docRef = doc(db, "users", userId);
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.data()) {
        setUser(docSnapshot.data());
      }
    }
    fetchUserData();
  }, [userId]);
  if (!userId || !user.username) return null;
  return (
    <div className="author">
      <div className="author-image">
        <img src={user?.avatar} alt="" />
      </div>
      <div className="author-content">
        <h3 className="author-name">{user?.fullname}</h3>
        <p className="author-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          distinctio ab consectetur ea similique doloribus nisi sed possimus,
          excepturi voluptates totam deserunt facilis ipsam magnam iste
          repudiandae sit, architecto officia!
        </p>
      </div>
    </div>
  );
};

export default AuthorBox;
