import React from "react";
import styled from "styled-components";

const LabelStyles = styled.label`
  color: ${(props) => props.theme.grayDark};
  font-weight: 600;
  cursor: pointer;
`;

const Label = () => {
  return (
    <label htmlFor="fullname" className="label">
      Fullname
    </label>
  );
};

export default Label;
