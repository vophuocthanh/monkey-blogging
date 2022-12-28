import React from "react";
import { useController } from "react-hook-form";
import styled from "styled-components";
import IconEyeOpen from "../icon/IconEyeOpen";

const InputStyles = styled.div`
  input {
    width: 100%;
    padding: ${(props) =>
      props.hasIcon ? "16px 60px 16px 20px" : "16px 20px"};
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.grayf1};
    border-radius: 8px;
    transition: all 0.2s linear;
    color: ${(props) => props.theme.black};
    font-size: 14px;
  }
  input::-webkit-input-placeholder {
    color: #b2b3bd;
  }
  input::-moz-input-placeholder {
    color: #b2b3bd;
  }
  .input-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
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
