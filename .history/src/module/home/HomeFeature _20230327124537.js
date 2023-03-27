import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swiper from "swiper";
import Heading from "../../components/layouts/Heading";
import { db } from "../../firebase-app/firebase-config";
import PostFeatureItem from "../post/PostFeatureItem";
const HomeFeatureStyles = styled.div`
  .view-all {
    font-size: 1em;
    color: ${(props) => props.theme.tertiary};
    font-weight: 600;
    cursor: pointer;
    position: relative;
    &:before {
      content: "";
      width: calc(1em + 1vw);
      height: 4px;
      background-color: ${(props) => props.theme.accent};
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translate(0, 150%);
    }
  }
`;

const HomeFeature = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const colRef = collection(db, "posts");
    const queries = query(
      colRef,
      where("status", "==", 1),
      where("hot", "==", true),
      limit(3)
    );
    onSnapshot(queries, (snapshot) => {
      const results = [];
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPosts(results);
    });
  }, []);
  if (posts.length <= 0) return null;
  return (
    <HomeFeatureStyles className="home-block">
      <div className="container">
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          <div className="flex items-center justify-between">
            <Heading>Feature</Heading>
            <span onClick={() => navigate("/blog")} className="view-all">
              View all
            </span>
          </div>
          <div className="grid-layout">
            {posts.slice(0, 2).map((user) => (
              <PostFeature user={user}></PostFeature>
            ))}
          </div>
        </Swiper>
      </div>
    </HomeFeatureStyles>
  );
};

export default HomeFeature;
