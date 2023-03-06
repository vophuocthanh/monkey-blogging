import { collection, onSnapshot, query, where } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import { db } from "../firebase-app/firebase-config";

const CategoryPage = () => {
  const [posts, setPosts] = useState([]);
  const params = useParams();
  useEffect(() => {
    async function fetchData() {
      const docRef = query(
        collection(db, "posts"),
        where("category.slug", "==", params.slug)
      );
      onSnapshot(docRef, (snapshot) => {
        const results = [];
        snapshot.forEach((doc) => {
          results.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setPosts(results);
      });
    }
    fetchData();
  }, [params.slug]);
  if (!posts.length <= 0) return null;
  return (
    <Layout>
      <div className="container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        fugit accusamus ipsa odio impedit ab reiciendis cupiditate quod ad, vero
        mollitia adipisci enim dolor aspernatur. Sit tenetur vel repudiandae
        qui.
      </div>
    </Layout>
  );
};

export default CategoryPage;
