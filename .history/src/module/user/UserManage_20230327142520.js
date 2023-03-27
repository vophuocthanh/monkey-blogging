import React, { useEffect } from "react";
import Button from "../../components/button/Button";
import { useAuth } from "../../contexts/auth-context";
import { userRoles } from "../../utils/constants";
import DashboardHeading from "../dashboard/DashboardHeading";
import UserTable from "./UserTable";

const UserManage = () => {
  useEffect(() => {
    document.title = "User";
  }, []);
  // const { userInfo } = useAuth();
  // if (userInfo.role !== userRoles.ADMIN) return null;
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
