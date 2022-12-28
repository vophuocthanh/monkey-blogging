import React from "react";
import styled from "styled-components";

const SignUpPageStyles = styled.div`
  background-color: ${(props) => props.theme}; ;
`;

const SighUpPage = () => {
  return (
    <SignUpPageStyles>
      <img srcSet="/logo.png 2x" alt="monkey-blogging" />
    </SignUpPageStyles>
  );
};

export default SighUpPage;
