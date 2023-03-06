import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layouts/Layout";

const CategoryPage = () => {
  const params = useParams();
  useEffect(() => {
    async function fetchData() {}
  }, []);
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
