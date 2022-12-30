import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.header``;

const Header = () => {
  return (
    <HeaderStyles>
      <a href="/">
        <img src="./logo.png" alt="" />
      </a>
    </HeaderStyles>
  );
};

export default Header;
