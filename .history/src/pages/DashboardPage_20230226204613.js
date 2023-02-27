import React, { useEffect } from "react";
import DashboardHeading from "../module/dashboard/DashboardHeading";

const DashboardPage = () => {
  useEffect(() => {
    document.title = "Monkey Blogging - DashboardPage";
  }, []);
  return (
    <div>
      <DashboardHeading
        title="Dashboard"
        desc="Overview dashboard monitor"
      ></DashboardHeading>
    </div>
  );
};

export default DashboardPage;
