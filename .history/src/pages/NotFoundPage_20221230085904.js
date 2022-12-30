import React, { useEffect } from "react";
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
  .heading {
    font-size: 60px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .back {
    display: inline-block;
    padding: 15px 30px;
    color: white;
    background-color: ${(props) => props.theme.primary};
    border-radius: 8px;
    font-weight: 500;
  }
`;

const NotFoundPage = () => {
  useEffect(() => {
    document.title = "Not Found Page";
  }, []);
  return (
    <NotFoundPageStyles>
      <NavLink to="/" className="logo">
        <img srcSet="/logo.png 2x" alt="monkey-blogging" />
      </NavLink>
      <h1 className="heading">404 Page note found</h1>
      <NavLink to="/" className="back">
        Back to home
      </NavLink>
    </NotFoundPageStyles>
  );
};

export default NotFoundPage;
