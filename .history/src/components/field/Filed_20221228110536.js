import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const FiledStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 20px;
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Filed = ({ children }) => {
  return <FiledStyles>{children}</FiledStyles>;
};

Filed.propTypes = {
  children: PropTypes.node,
};

export default Filed;
