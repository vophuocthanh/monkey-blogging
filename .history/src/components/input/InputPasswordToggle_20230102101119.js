import React, { Fragment, useState } from "react";
import IconEyeClose from "../icon/IconEyeClose";
import IconEyeOpen from "../icon/IconEyeOpen";
import Input from "./Input";

const InputPasswordToggle = ({ control }) => {
  const [togglePassword, setTogglePassword] = useState(false);
  return (
    <Fragment>
      <Input
        type={togglePassword ? "text" : "password"}
        name="password"
        placeholder="Enter your password"
        control={control}
      >
        {!togglePassword ? (
          <IconEyeClose onClick={() => setTogglePassword(true)}></IconEyeClose>
        ) : (
          togglePassword && (
            <IconEyeOpen onClick={() => setTogglePassword(false)}></IconEyeOpen>
          )
        )}
      </Input>
    </Fragment>
  );
};

export default InputPasswordToggle;
