import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Filed } from "../components/field";
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
        <Filed></Filed>
      </form>
    </AuthenticationPage>
  );
};

export default SignInPage;
