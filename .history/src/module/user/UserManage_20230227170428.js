import React, { useEffect, useState } from "react";
import ActionDelete from "../../components/action/ActionDelete";
import ActionEdit from "../../components/action/ActionEdit";
import ActionView from "../../components/action/ActionView";
import Button from "../../components/button/Button";
import Table from "../../components/table/Table";
import DashboardHeading from "../dashboard/DashboardHeading";
import UserTable from "./UserTable";

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
      <UserTable></UserTable>
    </div>
  );
};
export default UserManage;
