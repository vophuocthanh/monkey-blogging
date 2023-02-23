import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import slugify from "slugify";
import styled from "styled-components";
import Button from "../../components/button/Button";
import Radio from "../../components/checkbox/Radio";
import { Filed } from "../../components/field";
import Input from "../../components/input/Input";
import { Label } from "../../components/label";
import { postStatus } from "../../utils/constants";
import ImageUpload from "../../components/image/ImageUpload";
import useFirebaseImage from "../../hooks/useFirebaseImage";
import Toggle from "../../components/toggle/Toggle";
import { db } from "../../firebase-app/firebase-config";
import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import Dropdown from "../../components/dropdown/Dropdown";
import Option from "../../components/dropdown/Option";
import Select from "../../components/dropdown/Select";
import List from "../../components/dropdown/List";
import { useAuth } from "../../contexts/auth-context";
import { toast } from "react-toastify";
//  const storage = getStorage();
const PostAddNewStyles = styled.div``;
const PostAddNew = () => {
  const { userInfo } = useAuth();
  // console.log("PostAddNew ~ userInfo", userInfo);
  const { control, watch, setValue, handleSubmit, getValues, reset } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      slug: "",
      status: 2,
      categoryId: "",
      hot: false,
      image: "",
    },
  });
  const watchStatus = watch("status");
  const watchHot = watch("hot");
  const { image, progress, handleSelectImage, handleDeleteImage } =
    useFirebaseImage(setValue, getValues);
  const [categories, setCategories] = useState([]);
  const [selectCategory, setSelectCategory] = useState("");
  const [loading, setLoading] = useState(false);
  // const watchCategory = watch("category");
  // console.log("PostAddNew ~ watchCategory", watchCategory);
  const addPostHandler = async (values) => {
    setLoading(true);
    // Chức năng add post
    // console.log("addPostHandler ~ values", values);
    const cloneValues = { ...values };
    cloneValues.slug = slugify(values.slug || values.title, { lower: true });
    cloneValues.status = Number(values.status);
    const colRef = collection(db, "posts");
    await addDoc(colRef, {
      ...cloneValues,
      image,
      userId: userInfo.uid,
      createdAt: serverTimestamp,
      // title: cloneValues.title,
      // slug: cloneValues.slug,
      // hot: cloneValues.hot,
      // status: cloneValues.status,
      // categoryId: cloneValues.categoryId,
    });
    toast.success(" Create new post successfully");
    // console.log("addPostHandler ~ cloneValues", cloneValues);
    reset({
      title: "",
      slug: "",
      status: 2,
      categoryId: "",
      hot: false,
      image: "",
    });
    setSelectCategory({});
  };

  useEffect(() => {
    async function getData() {
      const colRef = collection(db, "categories");
      const q = query(colRef, where("status", "==", 1));
      const querySnapshot = await getDocs(q);
      // console.log("useEffect ~ querySnapshot", querySnapshot);
      let result = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        result.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setCategories(result);
      // console.log("getData ~ result", result);
    }
    getData();
  }, []);
  const handleClickOption = (item) => {
    setValue("categoryId", item.id);
    setSelectCategory(item); // nó là 1 object(id,name,slug)
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
              onChange={handleSelectImage}
              className="h-[250px]"
              progress={progress}
              image={image}
              handleDeleteImage={handleDeleteImage}
            ></ImageUpload>
          </Filed>
          <Filed>
            <Label>Category</Label>
            <Dropdown>
              <Select
                placeholder={`${selectCategory || "Please select an option"}`}
              ></Select>
              <List>
                {categories.length > 0 &&
                  categories.map((item) => (
                    <Option
                      key={item.id}
                      onCLick={() => handleClickOption(item)}
                    >
                      {item.name}
                    </Option>
                  ))}
              </List>
              {selectCategory?.name && (
                <span className="inline-block p-3 font-medium text-green-600 rounded-lg bg-green-50">
                  {selectCategory?.name}
                </span>
              )}
            </Dropdown>
          </Filed>
          {/* <Filed>
            <Label>Author</Label>
            <Input control={control} placeholder="Find the author"></Input>
          </Filed> */}
        </div>
        <div className="grid grid-cols-2 mb-10 gap-x-10">
          <Filed>
            <Label>Feature post</Label>
            <Toggle
              on={watchHot === true}
              onClick={() => setValue("hot", !watchHot)}
            ></Toggle>
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
        </div>
        <Button type="submit" className="mx-auto">
          Add new post
        </Button>
      </form>
    </PostAddNewStyles>
  );
};

export default PostAddNew;
// convert temperature from Celciust to Frenheit
