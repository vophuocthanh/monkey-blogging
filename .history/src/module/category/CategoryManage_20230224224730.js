import React from "react";
import Button from "../../components/button/Button";
import Table from "../../components/table/Table";
import DashboardHeading from "../dashboard/DashboardHeading";

const CategoryManage = () => {
  return (
    <div>
      <DashboardHeading title="Categories" desc="Manage your category">
        <Button kind="ghost" height="60px" to="/manage/add-category">
          Create category
        </Button>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, neque.
        Consequuntur sapiente odio nostrum ipsum vitae tempore nemo voluptatem
        porro eveniet! Saepe, optio dolores! Nisi placeat unde amet aspernatur
        a.
      </DashboardHeading>

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
