import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.header``;

const Header = () => {
  return (
    <HeaderStyles>
      <a href="/">
        <img srcSet="/logo.png 2x" alt="" />
      </a>
    </HeaderStyles>
  );
};

export default Header;
