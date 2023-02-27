import React from "react";
import Button from "../../components/button/Button";
import Table from "../../components/table/Table";
import DashboardHeading from "../dashboard/DashboardHeading";

const CategoryManage = () => {
  return (
    <div className="flex">
      <DashboardHeading
        title="Categories"
        desc="Manage your category"
      ></DashboardHeading>
      <Button kind="ghost" height="60px" to="/manage/add-category">
        Create category
      </Button>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Slug</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
      </Table>
    </div>
  );
};

export default CategoryManage;
