import { doc, getDoc, updateDoc } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import Button from "../../components/button/Button";
import Radio from "../../components/checkbox/Radio";
import Dropdown from "../../components/dropdown/Dropdown";
import List from "../../components/dropdown/List";
import Select from "../../components/dropdown/Select";
import { Filed } from "../../components/field";
import FieldCheckboxes from "../../components/field/FieldCheckboxes";
import ImageUpload from "../../components/image/ImageUpload";
import Input from "../../components/input/Input";
import { Label } from "../../components/label";
import Toggle from "../../components/toggle/Toggle";
import { db } from "../../firebase-app/firebase-config";
import useFirebaseImage from "../../hooks/useFirebaseImage";
import { postStatus } from "../../utils/constants";
import DashboardHeading from "../dashboard/DashboardHeading";

const PostUpdate = () => {
  const [params] = useSearchParams();
  const postId = params.get("id");
  const [loading, setLoading] = useState(false);
  const { control, watch, setValue, handleSubmit, getValues, reset } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      slug: "",
      status: 2,
      hot: false,
      image: "",
      category: {},
      user: {},
    },
  });

  const watchStatus = watch("status");
  const imageUrl = getValues("image");
  const imageName = getValues("image_name");
  const { image, setImage, progress, handleSelectImage, handleDeleteImage } =
    useFirebaseImage(setValue, getValues, imageName, deleteAvatar);
  async function deleteAvatar() {
    const colRef = doc(db, "posts", postId);
    await updateDoc(colRef, {
      avatar: "",
    });
  }
  const updatePostHandler = (values) => {};
  const watchHot = watch("hot");
  useEffect(() => {
    document.title = "Monkey Blogging - Update post";
  }, []);
  useEffect(() => {
    async function fetchData() {
      if (!postId) return;
      const docRef = doc(db, "posts", postId);
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.data()) {
        reset(docSnapshot.data());
      }
    }
    fetchData();
  }, [postId, reset]);
  if (!postId) return null;
  return (
    <>
      <DashboardHeading
        title="Update post"
        desc="Update post content"
      ></DashboardHeading>
      <form onSubmit={handleSubmit(updatePostHandler)}>
        <div className="form-layout">
          <Filed>
            <Label>Title</Label>
            <Input
              control={control}
              placeholder="Enter your title"
              name="title"
              required
            ></Input>
          </Filed>
          <Filed>
            <Label>Slug</Label>
            <Input
              control={control}
              placeholder="Enter your slug"
              name="slug"
            ></Input>
          </Filed>
        </div>
        <div className="form-layout">
          <Filed>
            <Label>Image</Label>
            <ImageUpload
              onChange={handleSelectImage}
              handleDeleteImage={handleDeleteImage}
              className="h-[250px]"
              progress={progress}
              image={image}
            ></ImageUpload>
          </Filed>
          <Filed>
            <Label>Category</Label>
            <Dropdown>
              <Select
                // placeholder={`${selectCategory || "Please select an option"}`}
                placeholder="Select the category"
              ></Select>
              <List>
                {/* {categories.length > 0 &&
                  categories.map((item) => (
                    <Option
                      key={item.id}
                      onCLick={() => handleClickOption(item)}
                    >
                      {item.name}
                    </Option>
                  ))} */}
              </List>
            </Dropdown>
            {/* {selectCategory?.name && (
              <span className="inline-block p-3 font-medium text-green-600 rounded-lg bg-green-50">
                {selectCategory?.name}
              </span>
            )} */}
          </Filed>
        </div>
        <div className="form-layout">
          <Filed>
            <Label>Feature post</Label>
            <Toggle
              on={watchHot === true}
              onClick={() => setValue("hot", !watchHot)}
            ></Toggle>
          </Filed>
          <Filed>
            <Label>Status</Label>
            <FieldCheckboxes>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === postStatus.APPROVED}
                value={postStatus.APPROVED}
              >
                Approved
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === postStatus.PENDING}
                value={postStatus.PENDING}
              >
                Pending
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === postStatus.REJECTED}
                value={postStatus.REJECTED}
              >
                Reject
              </Radio>
            </FieldCheckboxes>
          </Filed>
        </div>
        <Button
          type="submit"
          className="mx-auto w-[250px]"
          isLoading={loading}
          disabled={loading}
        >
          Add new post
        </Button>
      </form>
    </>
  );
};

export default PostUpdate;
