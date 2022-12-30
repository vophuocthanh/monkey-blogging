import React from "react";
import styled from "styled-components";

const PostCategoryStyles = styled.div`
  display: inline-block;
  padding: 8px 12px;
  border-radius: 8px;
  color: #6b6b6b;
  font-size: 14px;
  font-weight: 600;
  background-color: #f3f3f3;
`;

const PostCategory = ({ children }) => {
  return <PostCategoryStyles>{children}</PostCategoryStyles>;
};

export default PostCategory;
