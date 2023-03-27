import React, { useEffect } from "react";
import DashboardHeading from "../module/dashboard/DashboardHeading";

const DashboardPage = () => {
  useEffect(() => {
    document.title = "Monkey Blogging - DashboardPage";
  }, []);
  return (
    <div>
      <DashboardHeading title="Dashboard" desc="Overview dashboard monitor">
        <div className="layout-item">
          <img
            src="https://images.unsplash.com/photo-1653918837261-3799b239864a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80"
            alt=""
          />
        </div>
        <div className="layout-item">
          <img
            src="https://images.unsplash.com/photo-1653923138014-6fef26b225e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
            alt=""
          />
        </div>
        <div className="layout-item">
          <img
            src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=352&q=80"
            alt=""
          />
        </div>
        <div className="layout-item">
          <img
            src="https://images.unsplash.com/photo-1445262102387-5fbb30a5e59d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
        </div>
        <div className="layout-item">
          <img
            src="https://images.unsplash.com/photo-1485201543483-f06c8d2a8fb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
            alt=""
          />
        </div>
        <div className="layout-item">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            alt=""
          />
        </div>
      </DashboardHeading>
    </div>
  );
};

export default DashboardPage;
