import React, { useState } from "react";
import { useForm } from "react-hook-form";
import slugify from "slugify";
import styled from "styled-components";
import Button from "../../components/button/Button";
import Radio from "../../components/checkbox/Radio";
import Dropdown from "../../components/dropdown/Dropdown";
import { Filed } from "../../components/field";
import Input from "../../components/input/Input";
import { Label } from "../../components/label";
import { postStatus } from "../../utils/constants";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import ImageUpload from "../../components/image/ImageUpload";
import { collection } from "firebase/firestore";

//  const storage = getStorage();

const PostAddNewStyles = styled.div``;

const PostAddNew = () => {
  const { control, watch, setValue, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      slug: "",
      status: 2,
      category: "",
    },
  });
  const watchStatus = watch("status");
  const watchCategory = watch("category");
  // console.log("PostAddNew ~ watchCategory", watchCategory);
  const addPostHandler = async (values) => {
    // console.log("addPostHandler ~ values", values);
    const cloneValues = { ...values };
    cloneValues.slug = slugify(values.slug || values.title);
    cloneValues.status = Number(values.status);
    const colRef = collection(db, "posts");
    console.log("addPostHandler ~ cloneValues", cloneValues);
    // handleUploadImage(cloneValues.image);
  };
  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState("");
  const handleUploadImage = (file) => {
    const storage = getStorage();
    const storageRef = ref(storage, "images/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progressPercent =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log("Upload is " + progress + "% done");
        setProgress(progressPercent);
        // trạng thái hình ảnh khi upload lên.
        switch (snapshot.state) {
          // trạng thái khi đang upload lên mà bị dừng
          case "paused":
            console.log("Upload is paused");
            break;
          // trạng thái đang upload (%)
          case "running":
            console.log("Upload is running");
            break;
          default:
            console.log("Nothing at all");
        }
      },
      (error) => {
        // callback, nếu lỗi thì sẽ chạy vào đây
        console.log("Error");
      },
      () => {
        // Khi mà upload thành công vào trong firebase/storage thì nó sẽ có 1 đường đãn
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImage(downloadURL);
        });
      }
    );
  };
  const onSelectImage = (e) => {
    // console.log(e.target.files);
    const file = e.target.files[0];
    console.log("onSelectImage ~ file", file);
    if (!file) return;
    setValue("image", file);
    handleUploadImage(file);
  };
  return (
    <PostAddNewStyles>
      <h1 className="dashboard-heading">Add new post</h1>
      <form onSubmit={handleSubmit(addPostHandler)}>
        <div className="grid grid-cols-2 mb-10 gap-x-10">
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
        <div className="grid grid-cols-2 mb-10 gap-x-10">
          <Filed>
            <Label>Image</Label>
            <ImageUpload
              onChange={onSelectImage}
              className="h-[250px]"
              progress={progress}
              image={image}
            ></ImageUpload>
          </Filed>
          <Filed>
            <Label>Status</Label>
            <div className="flex items-center gap-x-5">
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === postStatus.APPROVED}
                // onClick={() => setValue("status", "approved")}
                value={postStatus.APPROVED}
              >
                Approved
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === postStatus.PENDING}
                // onClick={() => setValue("status", "pending")}
                value={postStatus.PENDING}
              >
                Pending
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === postStatus.REJECTED}
                // onClick={() => setValue("status", "reject")}
                value={postStatus.REJECTED}
              >
                Reject
              </Radio>
            </div>
          </Filed>
          {/* <Filed>
            <Label>Author</Label>
            <Input control={control} placeholder="Find the author"></Input>
          </Filed> */}
        </div>
        <div className="grid grid-cols-2 mb-10 gap-x-10">
          <Filed>
            <Label>Category</Label>
            <Dropdown>
              <Dropdown.Option>Knowledge</Dropdown.Option>
              <Dropdown.Option>Blockchain</Dropdown.Option>
              <Dropdown.Option>Setup</Dropdown.Option>
              <Dropdown.Option>Nature</Dropdown.Option>
              <Dropdown.Option>Developer</Dropdown.Option>
            </Dropdown>
          </Filed>
          <Filed></Filed>
        </div>
        <Button type="submit" className="mx-auto">
          Add new post
        </Button>
      </form>
    </PostAddNewStyles>
  );
};

export default PostAddNew;
