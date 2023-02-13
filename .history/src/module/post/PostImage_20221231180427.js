import React from "react";
import styled from "styled-components";

const PostImageStyles = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
`;

const PostImage = ({ className = "", url = "", alt = "" }) => {
  return <PostImageStyles></PostImageStyles>;
};

export default PostImage;