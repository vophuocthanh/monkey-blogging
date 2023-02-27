import React, { useEffect } from "react";
import DashboardHeading from "../dashboard/DashboardHeading";

const UserManage = () => {
  useEffect(() => {
    document.title = "Monkey Blogging - User";
  }, []);

  return (
    <div>
      <DashboardHeading
        title="Users"
        desc="Manage your user"
      ></DashboardHeading>
    </div>
  );
};
export default UserManage;
