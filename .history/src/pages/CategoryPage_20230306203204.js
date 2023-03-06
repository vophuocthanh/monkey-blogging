import { collection, onSnapshot, query, where } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import { db } from "../firebase-app/firebase-config";

const CategoryPage = () => {
  const params = useParams();
  useEffect(() => {
    async function fetchData() {
      const docRef = query(
        collection(db, "posts"),
        where("category.slug", "==", params.slug)
      );
      onSnapshot(docRef, (snapshot) => {
        snapshot.forEach((doc) => {});
      });
    }
  }, [params.slug]);
  return (
    <Layout>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
      similique laudantium molestiae nobis. Voluptates, quisquam. Dolores
      tenetur, perspiciatis nulla nobis cum quidem deleniti, rerum eum
      accusantium debitis quod? Reiciendis, nam.
    </Layout>
  );
};

export default CategoryPage;
