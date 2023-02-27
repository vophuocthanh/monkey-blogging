import React from "react";
import Button from "../../components/button/Button";
import Table from "../../components/table/Table";
import DashboardHeading from "../dashboard/DashboardHeading";

const CategoryManage = () => {
  return (
    <div>
      <DashboardHeading title="Categories" desc="Manage your category">
        <Button kind="ghost" height="60px" to="/manage/add-category"></Button>
      </DashboardHeading>
      <Table></Table>
    </div>
  );
};

export default CategoryManage;
