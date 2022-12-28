import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../components/button/Button";
import { Filed } from "../components/field";
import Input from "../components/input/Input";
import { Label } from "../components/label";
import { useAuth } from "../contexts/auth-context";
import AuthenticationPage from "./AuthenticationPage";

const SignInPage = () => {
  const { handleSubmit, control } = useForm({
    mode: "onChange",
  });
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (!userInfo.email) navigate("/sign-up");
  //   else navigate("/");
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  const handleSignIn = (values) => {};
  return (
    <AuthenticationPage>
      <form className="form" onSubmit={handleSubmit(handleSignIn)}>
        <Filed>
          <Label htmlFor="email">Email address</Label>
          <Input
            name="email"
            placeholder="Enter your email address"
            type="email"
            control={control}
          ></Input>
        </Filed>
        <Filed>
          <Label htmlFor="password">Password</Label>
          <Input
            name="password"
            placeholder="Enter your password"
            type="password"
            control={control}
          ></Input>
        </Filed>
        <Button>Log In</Button>
      </form>
    </AuthenticationPage>
  );
};

export default SignInPage;
