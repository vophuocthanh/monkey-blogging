import React from "react";
import styled from "styled-components";

const PostMetaStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  font-weight: 600;
  color: white;
  .time {
  }
  .dot {
  }
  .author {
  }
`;

const PostMeta = ({ date = "Mar 23", authorName = "Andiez Le" }) => {
  return (
    <PostMetaStyles>
      <span className="time">{date}</span>
      <span className="dot"></span>
      <span className="author">{authorName}</span>
    </PostMetaStyles>
  );
};

export default PostMeta;
