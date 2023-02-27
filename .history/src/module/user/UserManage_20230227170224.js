import React, { useEffect, useState } from "react";
import ActionDelete from "../../components/action/ActionDelete";
import ActionEdit from "../../components/action/ActionEdit";
import ActionView from "../../components/action/ActionView";
import Button from "../../components/button/Button";
import Table from "../../components/table/Table";
import DashboardHeading from "../dashboard/DashboardHeading";

const UserManage = () => {
  const [userList, setListUsers] = useState([]);
  useEffect(() => {
    document.title = "Monkey Blogging - User";
  }, []);

  return (
    <div>
      <DashboardHeading title="Users" desc="Manage your user">
        <Button kind="ghost" height="60px" to="/manage/add-user">
          Create add user
        </Button>
      </DashboardHeading>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Võ Phước Thạnh</td>
            <td>phuocthanh2k03@gmail.com</td>
            <td>Active</td>
            <td>Admin</td>
            <td>
              <div className="flex items-center gap-x-3">
                <ActionView></ActionView>
                <ActionEdit></ActionEdit>
                <ActionDelete></ActionDelete>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default UserManage;
