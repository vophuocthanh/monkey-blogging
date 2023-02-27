import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const CategoryUpdate = () => {
  useEffect(() => {
    document.title = "Monkey Blogging - Update Category";
  }, []);
  const [params] = useSearchParams();
  console.log("CategoryUpdate ~ params", params.get("id"));
  return <div></div>;
};

export default CategoryUpdate;
