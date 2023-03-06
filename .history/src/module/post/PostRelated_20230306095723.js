import React from "react";
import { useState } from "react";
import Heading from "../../components/layouts/Heading";
import PostItem from "./PostItem";

const PostRelated = ({ categoryId = "" }) => {
  const [category, setCategory] = useState("");
  if (!categoryId) return null;
  return (
    <div className="post-related">
      <Heading>Bài viết liên quan</Heading>
      <div className="grid-layout grid-layout--primary">
        {/* <PostItem></PostItem>
        <PostItem></PostItem>
        <PostItem></PostItem>
        <PostItem></PostItem> */}
      </div>
    </div>
  );
};

export default PostRelated;
