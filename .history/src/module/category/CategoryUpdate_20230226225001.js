import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import DashboardHeading from "../dashboard/DashboardHeading";

const CategoryUpdate = () => {
  useEffect(() => {
    document.title = "Monkey Blogging - Update Category";
  }, []);
  const [params] = useSearchParams();
  // console.log("CategoryUpdate ~ params", params.get("id"));
  const categoryId = params.get("id");
  if (!categoryId) return null;
  return (
    <div>
      <DashboardHeading
        title="Update Category"
        desc={`Update your category id: ${categoryId}`}
      ></DashboardHeading>
    </div>
  );
};

export default CategoryUpdate;
