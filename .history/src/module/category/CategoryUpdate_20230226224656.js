import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

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
      {" "}
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum modi
      provident eligendi magnam officiis saepe qui sed, obcaecati architecto
      laborum alias velit asperiores consequuntur magni incidunt fugiat totam
      animi explicabo.
    </div>
  );
};

export default CategoryUpdate;
