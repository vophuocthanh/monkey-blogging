import React, { useEffect, useState } from "react";
import Button from "../../components/button/Button";
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
