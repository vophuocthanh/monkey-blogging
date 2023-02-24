import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/button/Button";
import Radio from "../../components/checkbox/Radio";
import { Filed } from "../../components/field";
import Input from "../../components/input/Input";
import { Label } from "../../components/label";
import DashboardHeading from "../dashboard/DashboardHeading";

const CategoryAddNew = () => {
  const {
    control,
    setValue,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onChange",
  });
  return (
    <div>
      <DashboardHeading
        title="New category"
        desc="Add new category"
      ></DashboardHeading>
      <form>
        <div className="form-layout">
          <Filed>
            <Label>Name</Label>
            <Input
              control={control}
              name="name"
              placeholder="Enter your category name"
            ></Input>
          </Filed>
          <Filed
>
            <Label>Slug</Label>
            <Input
              control={control}
              name="slug"
              placeholder="Enter your slug"
            ></Input>
          </Fil>
        </div>
        <div className="form-layout">
          <Filed>
            <Label>Status</Label>
            <div className="flex flex-wrap gap-x-5">
              <Radio name="status" control={control} checked={true}>
                Approved
              </Radio>
              <Radio name="status" control={control}>
                Unapproved
              </Radio>
            </div>
          </Filed>
        </div>
        <Button kind="primary" className="mx-auto">
          Add new category
        </Button>
      </form>
    </div>
  );
};

export default CategoryAddNew;
