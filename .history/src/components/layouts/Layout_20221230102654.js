import React, { Fragment } from "react";
import Header from "./Header";

const Layout = ({ chidlren }) => {
  return (
    <Fragment>
      <Header></Header>
      {children}
    </Fragment>
  );
};

export default Layout;
