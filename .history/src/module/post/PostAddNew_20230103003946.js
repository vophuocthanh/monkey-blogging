import React from "react";
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
    console.log("addPostHandler ~ cloneValues", cloneValues);
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
            <input type="file" name="image" />
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
          <Filed>
            <Label>Author</Label>
            <Input control={control} placeholder="Find the author"></Input>
          </Filed>
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
