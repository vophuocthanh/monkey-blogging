import slugify from "slugify";
import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import ReactQuill from "react-quill";
import axios from "axios";
import { useAuth } from "../../contexts/auth-context";
import { db } from "../../firebase-app/firebase-config";
import { Filed } from "../../components/field";
import FieldCheckboxes from "../../components/field/FieldCheckboxes";
import { Label } from "../../components/label";
import Input from "../../components/input/Input";
import ImageUpload from "../../components/image/ImageUpload";
import Dropdown from "../../components/dropdown/Dropdown";
import Toggle from "../../components/toggle/Toggle";
import Radio from "../../components/checkbox/Radio";
import { postStatus } from "../../utils/constants";
import Button from "../../components/button/Button";
import useFirebaseImage from "../../hooks/useFirebaseImage";
import { imgbbAPI } from "../../config/apiConfig";
import DashboardHeading from "../dashboard/DashboardHeading";

const PostAddNew = () => {
  const { userInfo } = useAuth();
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
  const {
    image,
    handleResetUpload,
    progress,
    handleSelectImage,
    handleRemoveImage,
  } = useFirebaseImage(setValue, getValues);
  const [categories, setCategories] = useState([]);
  const [selectCategory, setSelectCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const addPostHandler = async (values) => {
    setLoading(true);
    try {
      const cloneValues = { ...values };
      cloneValues.slug = slugify(values.slug || values.title, { lower: true });
      cloneValues.status = Number(values.status);
      const colRef = collection(db, "users", userInfo.uid, "posts");
      await addDoc(colRef, {
        ...cloneValues,
        content,
        image,
        userId: userInfo.uid,
        createdAt: serverTimestamp(),
      });
      toast.success("Create new post successfully!");
      reset({
        content: "",
        title: "",
        slug: "",
        status: 2,
        categoryId: "",
        hot: false,
        image: "",
      });
      handleResetUpload();
      setSelectCategory({});
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    async function getData() {
      const colRef = collection(db, "categories");
      const q = query(colRef, where("status", "==", 1));
      const querySnapshot = await getDocs(q);
      let result = [];
      querySnapshot.forEach((doc) => {
        result.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setCategories(result);
    }
    getData();
  }, []);

  useEffect(() => {
    document.title = "Monkey Blogging - Add new post";
  }, []);

  const handleClickOption = (item) => {
    setValue("categoryId", item.id);
    setSelectCategory(item);
  };

  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote", "code-block"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {
        upload: async (file) => {
          const bodyFormData = new FormData();
          bodyFormData.append("image", file);
          const response = await axios({
            method: "post",
            url: imgbbAPI,
            data: bodyFormData,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          return response.data.data.url;
        },
      },
    }),
    []
  );

  return (
    <>
      <DashboardHeading title="Add post" desc="Add new post"></DashboardHeading>
      <form onSubmit={handleSubmit(addPostHandler)}>
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
              handleRemoveImage={handleRemoveImage}
              className="h-[250px] shadow-lg"
              progress={progress}
              image={image}
            ></ImageUpload>
          </Filed>
          <Filed>
            <Label>Category</Label>
            <Dropdown>
              <Dropdown.Select placeholder="Select the category"></Dropdown.Select>
              <Dropdown.List>
                {categories.length > 0 &&
                  categories.map((item) => (
                    <Dropdown.Option
                      key={item.id}
                      onClick={() => handleClickOption(item)}
                    >
                      {item.name}
                    </Dropdown.Option>
                  ))}
              </Dropdown.List>
            </Dropdown>
            {selectCategory?.name && (
              <span className="inline-block p-3 text-sm font-medium text-green-600 rounded-lg bg-green-50">
                {selectCategory?.name}
              </span>
            )}
          </Filed>
        </div>
        <div className="form-layout">
          <div className="mb-10">
            <Filed>
              <Label>Content</Label>
              <div className="w-full entry-content">
                <ReactQuill
                  modules={modules}
                  theme="snow"
                  value={content}
                  onChange={setContent}
                />
              </div>
            </Filed>
          </div>
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

export default PostAddNew;
