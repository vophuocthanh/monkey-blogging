import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA-UGXhKO9d70dBrcvY4fXZZRDZBziND20",
  authDomain: "monkey-blogging-b0a35.firebaseapp.com",
  projectId: "monkey-blogging-b0a35",
  storageBucket: "monkey-blogging-b0a35.appspot.com",
  messagingSenderId: "711450377166",
  appId: "1:711450377166:web:159e707833f5c9fb5a099f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
