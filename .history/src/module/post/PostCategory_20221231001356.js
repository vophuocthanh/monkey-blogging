import React from "react";
import styled from "styled-components";

const PostCategoryStyles = styled.div``;

const PostCategory = ({ children }) => {
  return <PostCategoryStyles>{children}</PostCategoryStyles>;
};

export default PostCategory;
