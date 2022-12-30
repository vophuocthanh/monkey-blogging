import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../firebase-app/firebase-config";
import styled from "styled-components";
import Header from "../components/layouts/Header";
import HomeBanner from "../module/home/HomeBanner";
import Layout from "../components/layouts/Layout";
const HomePageStyles = styled.div``;

const HomePage = () => {
  useEffect(() => {
    document.title = "Monkey Blogging";
  }, []);
  return (
    <HomePageStyles>
      <Layout></Layout>
      <HomeBanner></HomeBanner>
    </HomePageStyles>
  );
};

export default HomePage;
