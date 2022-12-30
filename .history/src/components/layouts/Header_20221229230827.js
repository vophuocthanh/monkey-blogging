import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.header``;

const Header = () => {
  return (
    <HeaderStyles>
      <div className="container">
        <div className="header-man">
          <a href="/">
            <img srcSet="/logo.png 2x" alt="monkey-blogging" />
          </a>
          <ul className="menu">
            <li className="menu-item">
              <a href="/#" className="menu-link">
                Home
              </a>
            </li>
            <li className="menu-item">
              <a href="/#" className="menu-link">
                Blog
              </a>
            </li>
            <li className="menu-item">
              <a href="/#" className="menu-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
