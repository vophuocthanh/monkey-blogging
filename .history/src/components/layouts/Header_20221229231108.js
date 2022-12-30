import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.header``;

const MenuLinks = [
  {
    url: "/#",
    title: "Home",
  },
  {
    url: "/#",
    title: "Blog",
  },
  {
    url: "/#",
    title: "Contact",
  },
];

const Header = () => {
  return (
    <HeaderStyles>
      <div className="container">
        <div className="header-man">
          <a href="/">
            <img srcSet="/logo.png 2x" alt="monkey-blogging" />
          </a>
          <ul className="menu">
            {MenuLinks.map((item) => (
              <li className="menu-item">
                <a href="/#" className="menu-link">
                  Home
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
