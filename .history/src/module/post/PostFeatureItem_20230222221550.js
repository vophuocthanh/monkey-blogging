import { collection, doc, getDoc, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../../firebase-app/firebase-config";
import PostCategory from "./PostCategory";
import PostImage from "./PostImage";
import PostMeta from "./PostMeta";
import PostTitle from "./PostTitle";
const PostFeatureItemStyles = styled.div`
  width: 100%;
  border-radius: 16px;
  position: relative;
  height: 169px;
  .post {
    &-image {
      width: 100%;
      height: 100%;
      border-radius: 16px;
    }
    &-overlay {
      position: absolute;
      inset: 0;
      border-radius: 16px;
      background: linear-gradient(
        179.77deg,
        #6b6b6b 36.45%,
        rgba(163, 163, 163, 0.622265) 63.98%,
        rgba(255, 255, 255, 0) 99.8%
      );
      mix-blend-mode: multiply;
      opacity: 0.6;
    }
    &-content {
      position: absolute;
      inset: 0;
      z-index: 10;
      padding: 20px;
      color: white;
    }
    &-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }
  }
  @media screen and (min-width: 1024px) {
    height: 272px;
  }
`;
const PostFeatureItem = ({ data }) => {
  // console.log("PostFeatureItem ~ data", data);
  const [category, setCategory] = useState("");
  const [user, setUser] = useState("");
  useEffect(() => {
    async function fetch() {
      const docRef = doc(db, "categoryId", data.categoryId);
      const docSnap = await getDoc(docRef);
      setCategory(docSnap.data());
    }
    fetch();
  }, [data.categoryId]);
  useEffect(() => {
    async function fetchUser() {
      const docRef = doc(db, "users", data.userId);
      const docSnap = await getDoc(docRef);
      setUser(docSnap.data());
    }
    fetchUser();
  }, [data.userId]);
  if (!data || !data.id) return null;
  return (
    <PostFeatureItemStyles>
      <PostImage url={data.image}></PostImage>
      <div className="post-overlay"></div>
      <div className="post-content">
        <div className="post-top">
          <PostCategory>Kiến thức</PostCategory>
          {/* {category?.name && <PostCategory>{category.name}</PostCategory>} */}
          <PostMeta authorName={user?.name}></PostMeta>
        </div>
        <PostTitle size="big">{data.title}</PostTitle>
      </div>
    </PostFeatureItemStyles>
  );
};

export default PostFeatureItem;
