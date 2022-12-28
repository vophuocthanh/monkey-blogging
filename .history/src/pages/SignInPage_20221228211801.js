import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Filed } from "../components/field";
import Input from "../components/input/Input";
import { Label } from "../components/label";
import { useAuth } from "../contexts/auth-context";
import AuthenticationPage from "./AuthenticationPage";

const SignInPage = () => {
  const { handleSubmit } = useForm({
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
          ></Input>
        </Filed>
      </form>
    </AuthenticationPage>
  );
};

export default SignInPage;
