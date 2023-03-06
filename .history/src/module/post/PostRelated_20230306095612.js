import React from "react";
import Heading from "../../components/layouts/Heading";
import PostItem from "./PostItem";

const PostRelated = ({ categoryId = "" }) => {
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
