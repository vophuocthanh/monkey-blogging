import { doc, getDoc, updateDoc } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/button/Button";
import Radio from "../../components/checkbox/Radio";
import { Filed } from "../../components/field";
import FieldCheckboxes from "../../components/field/FieldCheckboxes";
import ImageUpload from "../../components/image/ImageUpload";
import Input from "../../components/input/Input";
import { Label } from "../../components/label";
import Textarea from "../../components/text/Textarea";
import { db } from "../../firebase-app/firebase-config";
import useFirebaseImage from "../../hooks/useFirebaseImage";
import { userRoles, userStatus } from "../../utils/constants";
import DashboardHeading from "../dashboard/DashboardHeading";

const UserUpdate = () => {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    getValues,
    reset,
    formState: { isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
  });

  const [params] = useSearchParams();
  const userId = params.get("id");
  const watchStatus = watch("status");
  const watchRole = watch("role");
  const imageUrl = getValues("avatar");
  const imageRegex = /%2F(\S+)\?/gm.exec(imageUrl);
  const imageName = imageRegex?.length > 0 ? imageRegex[1] : "";
  const { image, setImage, progress, handleSelectImage, handleDeleteImage } =
    useFirebaseImage(setValue, getValues, imageName, deleteAvatar);
  const handleUpdateUser = async (values) => {
    if (!isValid) return;
    try {
      const colRef = doc(db, "users", userId);
      await updateDoc(colRef, {
        ...values,
        avatar: image,
      });
      toast.success("Update user information successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Update user failed!");
    }
  };
  async function deleteAvatar() {
    const colRef = doc(db, "users", userId);
    await updateDoc(colRef, {
      avatar: "",
    });
  }
  useEffect(() => {
    setImage(imageUrl);
  }, [imageUrl, setImage]);
  useEffect(() => {
    document.title = "Monkey Blogging - Update user";
  }, []);
  useEffect(() => {
    async function fetchData() {
      if (!userId) return;
      const colRef = doc(db, "users", userId);
      const docData = await getDoc(colRef);
      reset(docData && docData.data());
    }
    fetchData();
  }, [userId, reset]);
  if (!userId) return null;
  return (
    <div>
      <DashboardHeading
        title="Update user"
        desc="Update user information"
      ></DashboardHeading>
      <form onSubmit={handleSubmit(handleUpdateUser)}>
        <div className="w-[200px] h-[200px] rounded-full mx-auto mb-10">
          <ImageUpload
            className="!rounded-full h-full"
            onChange={handleSelectImage}
            handleDeleteImage={handleDeleteImage}
            progress={progress}
            image={image}
          ></ImageUpload>
        </div>
        <div className="form-layout">
          <Filed>
            <Label>Fullname</Label>
            <Input
              name="fullname"
              placeholder="Enter your fullname"
              control={control}
            ></Input>
          </Filed>
          <Filed>
            <Label>Username</Label>
            <Input
              name="username"
              placeholder="Enter your username"
              control={control}
            ></Input>
          </Filed>
        </div>
        <div className="form-layout">
          <Filed>
            <Label>Email</Label>
            <Input
              name="email"
              placeholder="Enter your email"
              control={control}
              type="email"
            ></Input>
          </Filed>
          <Filed>
            <Label>Password</Label>
            <Input
              name="password"
              placeholder="Enter your password"
              control={control}
              type="password"
            ></Input>
          </Filed>
        </div>
        <div className="form-layout">
          <Filed>
            <Label>Status</Label>
            <FieldCheckboxes>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === userStatus.ACTIVE}
                value={userStatus.ACTIVE}
              >
                Active
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === userStatus.PENDING}
                value={userStatus.PENDING}
              >
                Pending
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === userStatus.BAN}
                value={userStatus.BAN}
              >
                Banned
              </Radio>
            </FieldCheckboxes>
          </Filed>
          <Filed>
            <Label>Role</Label>
            <FieldCheckboxes>
              <Radio
                name="role"
                control={control}
                checked={Number(watchRole) === userRoles.ADMIN}
                value={userRoles.ADMIN}
              >
                Admin
              </Radio>
              <Radio
                name="role"
                control={control}
                checked={Number(watchRole) === userRoles.MOD}
                value={userRoles.MOD}
              >
                Moderator
              </Radio>
              <Radio
                name="role"
                control={control}
                checked={Number(watchRole) === userRoles.USER}
                value={userRoles.USER}
              >
                User
              </Radio>
            </FieldCheckboxes>
          </Filed>
        </div>
        <div className="form-layout">
          <Filed>
            <Label>Description</Label>
            <Textarea name="description" control={control}></Textarea>
          </Filed>
        </div>
        <Button
          kind="primary"
          className="mx-auto w-[250px]"
          type="submit"
          disabled={isSubmitting}
          isLoading={isSubmitting}
        >
          Update information
        </Button>
      </form>
    </div>
  );
};

export default UserUpdate;
