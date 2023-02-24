import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/button/Button";
import Radio from "../../components/checkbox/Radio";
import { Filed } from "../../components/field";
import FieldCheckboxes from "../../components/field/FieldCheckboxes";
import Input from "../../components/input/Input";
import { Label } from "../../components/label";
import DashboardHeading from "../dashboard/DashboardHeading";

const CategoryAddNew = () => {
  const {
    control,
    setValue,
    formState: { errors, isSubmitting, isValid },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      slug: "",
      status: 1,
      createdAt: new Date(),
    },
  });
  const handleAddNewCategory = (values) => {
    console.log("handleAddNewCategory ~ values", values);
  };
  return (
    <div>
      <DashboardHeading
        title="New category"
        desc="Add new category"
      ></DashboardHeading>
      <form onSubmit={handleSubmit(handleAddNewCategory)}>
        <div className="form-layout">
          <Filed>
            <Label>Name</Label>
            <Input
              control={control}
              name="name"
              placeholder="Enter your category name"
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
              <Radio name="status" control={control} checked={true}>
                Approved
              </Radio>
              <Radio name="status" control={control}>
                Unapproved
              </Radio>
            </FieldCheckboxes>
          </Filed>
        </div>
        <Button kind="primary" className="mx-auto" type="submit">
          Add new category
        </Button>
      </form>
    </div>
  );
};

export default CategoryAddNew;
