import { collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Heading from "../../components/layouts/Heading";
import { db } from "../../firebase-app/firebase-config";
import PostFeatureItem from "../post/PostFeatureItem";
const HomeFeatureStyles = styled.div``;

const HomeFeature = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const colRef = collection(db, "posts");
    const q = query(db, "posts");
  }, []);
  if (posts.length <= 0) return null;
  return (
    <HomeFeatureStyles className="home-block">
      <div className="container">
        <Heading>Bài viết nổi bật</Heading>
        <div className="grid-layout"></div>
      </div>
    </HomeFeatureStyles>
  );
};

export default HomeFeature;
