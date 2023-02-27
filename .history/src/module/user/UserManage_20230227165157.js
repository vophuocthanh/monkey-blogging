import React, { useEffect } from "react";
import Button from "../../components/button/Button";
import DashboardHeading from "../dashboard/DashboardHeading";

const UserManage = () => {
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
      <tbody>
        <tr></tr>
      </tbody>
    </div>
  );
};
export default UserManage;
