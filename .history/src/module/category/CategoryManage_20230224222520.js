import React from "react";
import Table from "../../components/table/Table";
import DashboardHeading from "../dashboard/DashboardHeading";

const CategoryManage = () => {
  return (
    <div>
      <DashboardHeading
        title="Categories"
        desc="Manage your category"
      ></DashboardHeading>
      <Table></Table>
    </div>
  );
};

export default CategoryManage;
