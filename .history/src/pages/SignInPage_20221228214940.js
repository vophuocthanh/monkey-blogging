import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../components/button/Button";
import { Filed } from "../components/field";
import Input from "../components/input/Input";
import { Label } from "../components/label";
import { useAuth } from "../contexts/auth-context";
import AuthenticationPage from "./AuthenticationPage";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
const schema = yup.object({
  email: yup
    .string()
    .email("Please enter your email address")
    .required("Please enter your email address"),
  password: yup
    .string()
    .min(8, "Mật khẩu của bạn phải có ít nhất 8 ký tự trở lên")
    .required("Please enter your password"),
  // Your password must be at least 8 characters or greater
});

const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors]);
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
        <Button
          type="submit"
          style={{
            maxWidth: 300,
            margin: "0 auto",
          }}
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Log In
        </Button>
      </form>
    </AuthenticationPage>
  );
};

export default SignInPage;
