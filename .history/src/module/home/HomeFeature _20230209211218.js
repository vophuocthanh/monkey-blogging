import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Heading from "../../components/layouts/Heading";
import PostFeatureItem from "../post/PostFeatureItem";
const HomeFeatureStyles = styled.div``;

const HomeFeature = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {}, []);
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
