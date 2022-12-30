import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.header``;

const Header = () => {
  return (
    <HeaderStyles>
      <div className="container"></div>
      <a href="/">
        <img srcSet="/logo.png 2x" alt="monkey-blogging" />
      </a>
    </HeaderStyles>
  );
};

export default Header;
