import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/button/Button";
import Filed from "../../components/field/Filed";
import ImageUpload from "../../components/image/ImageUpload";
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";
import DashboardHeading from "../dashboard/DashboardHeading";

const UserProfile = () => {
  const { control } = useForm({
    mode: "onChange",
  });
  return (
    <div>
      <DashboardHeading
        title="Account information"
        desc="Update your account information"
      ></DashboardHeading>
      <form>
        <div className="mb-10 text-center">
          <ImageUpload className="w-[200px] h-[200px] !rounded-full min-h-0 mx-auto"></ImageUpload>
        </div>
        <div className="form-layout">
          <Filed>
            <Label>Fullname</Label>
            <Input
              control={control}
              name="fullname"
              placeholder="Enter your fullname"
            ></Input>
          </Filed>
          <Filed>
            <Label>Username</Label>
            <Input
              control={control}
              name="username"
              placeholder="Enter your username"
            ></Input>
          </Filed>
        </div>
        <div className="form-layout">
          <Filed>
            <Label>Date of Birth</Label>
            <Input
              control={control}
              name="birthday"
              placeholder="dd/mm/yyyy"
            ></Input>
          </Filed>
          <Filed>
            <Label>Mobile Number</Label>
            <Input
              control={control}
              name="phone"
              placeholder="Enter your phone number"
            ></Input>
          </Filed>
        </div>
        <div className="form-layout">
          <Filed>
            <Label>Email</Label>
            <Input
              control={control}
              name="email"
              type="email"
              placeholder="Enter your email address"
            ></Input>
          </Filed>
          <Filed></Filed>
        </div>
        <div className="form-layout">
          <Filed>
            <Label>New Password</Label>
            <Input
              control={control}
              name="password"
              type="password"
              placeholder="Enter your password"
            ></Input>
          </Filed>
          <Filed>
            <Label>Confirm Password</Label>
            <Input
              control={control}
              name="confirmPassword"
              type="password"
              placeholder="Enter your confirm password"
            ></Input>
          </Filed>
        </div>
        <Button kind="primary" className="mx-auto w-[200px]">
          Update
        </Button>
      </form>
    </div>
  );
};
