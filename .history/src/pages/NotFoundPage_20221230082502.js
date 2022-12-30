import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NotFoundPageStyles = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .logo {
    display: inline-block;
    margin-bottom: 40px;
  }
`;

const NotFoundPage = () => {
  return (
    <NotFoundPageStyles>
      <NavLink to="/" className="logo">
        <img srcSet="/logo.png 2x" alt="monkey-blogging" />
      </NavLink>
      <h1 className="heading">404 Page note found</h1>
    </NotFoundPageStyles>
  );
};

export default NotFoundPage;
