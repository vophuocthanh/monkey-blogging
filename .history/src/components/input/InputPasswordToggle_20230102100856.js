import React from "react";

const InputPasswordToggle = () => {
  return (
    <div>
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
    </div>
  );
};

export default InputPasswordToggle;
