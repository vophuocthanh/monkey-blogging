import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../firebase-app/firebase-config";
import styled from "styled-components";
import Header from "../components/layouts/Header";
const HomePageStyles = styled.div``;

const HomePage = () => {
  useEffect(() => {
    document.timeline;
  });
  return (
    <HomePageStyles>
      <Header></Header>
    </HomePageStyles>
  );
};

export default HomePage;
