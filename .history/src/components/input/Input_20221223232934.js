import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";
import IconEyeOpen from "../icon/IconEyeOpen";

const InputStyles = styled.div`
  position: relative;
  width: 100%;
  input {
    width: 100%;
    padding: 20px;
    background-color: ${(props) => props.theme.grayLight};
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.2s linear;
    border: 1px solid transparent;
  }
`;

const Input = ({
  name = "",
  type = "text",
  children,
  hasIcon = false,
  control,
  ...props
}) => {
  const { filed } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div>
      <InputStyles hasIcon={hasIcon}>
        <input id={name} type={type} {...filed} {...props} />
        {hasIcon ? <IconEyeOpen className="icon-eye"></IconEyeOpen> : null}
      </InputStyles>
    </div>
  );
};

export default Input;
