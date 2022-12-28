import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";

const SignInPage = () => {
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo.email) navigate("/sign-up");
    else navigate("/");
  }, []);
  return <div></div>;
};

export default SignInPage;
