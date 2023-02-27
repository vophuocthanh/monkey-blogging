import { collection, doc, getDoc } from "firebase/firestore";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import Button from "../../components/button/Button";
import Radio from "../../components/checkbox/Radio";
import { Filed } from "../../components/field";
import FieldCheckboxes from "../../components/field/FieldCheckboxes";
import Input from "../../components/input/Input";
import { Label } from "../../components/label";
import { db } from "../../firebase-app/firebase-config";
import { categoryStatus } from "../../utils/constants";
import DashboardHeading from "../dashboard/DashboardHeading";

const CategoryUpdate = () => {
  const { control, reset, watch, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: {},
  });
  useEffect(() => {
    document.title = "Monkey Blogging - Update Category";
  }, []);
  const [params] = useSearchParams();
  // console.log("CategoryUpdate ~ params", params.get("id"));
  const categoryId = params.get("id");
  useEffect(() => {
    async function fetchData() {
      const colRef = doc(db, "categories", categoryId);
      const singleDoc = await getDoc(colRef);
      // console.log("fetchData ~ singleDoc", singleDoc.data());
      reset(singleDoc.data());
    }
    fetchData();
  }, [categoryId, reset]);
  if (!categoryId) return null;
  const watchStatus = watch("status");
  return (
    <div>
      <DashboardHeading
        title="Update Category"
        desc={`Update your category id: ${categoryId}`}
      ></DashboardHeading>
      <form>
        <div className="form-layout">
          <Filed>
            <Label>Name</Label>
            <Input
              control={control}
              name="name"
              placeholder="Enter your category name"
              required
            ></Input>
          </Filed>
          <Filed>
            <Label>Slug</Label>
            <Input
              control={control}
              name="slug"
              placeholder="Enter your slug"
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
                checked={Number(watchStatus) === categoryStatus.APPROVED}
                value={categoryStatus.APPROVED}
              >
                Approved
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === categoryStatus.UNAPPROVED}
                value={categoryStatus.UNAPPROVED}
              >
                Unapproved
              </Radio>
            </FieldCheckboxes>
          </Filed>
        </div>
        <Button kind="primary" className="mx-auto w-[200px]">
          Update category
        </Button>
      </form>
    </div>
  );
};

export default CategoryUpdate;
