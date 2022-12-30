import React from "react";
import styled from "styled-components";

const HomeBannerStyles = styled.div`
  height: 520px;
`;

const HomeBanner = () => {
  return (
    <HomeBannerStyles>
      <div className="container"></div>
    </HomeBannerStyles>
  );
};

export default HomeBanner;
