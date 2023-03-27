import React from "react";
import styled from "styled-components";
import DashboardHeading from "../module/dashboard/DashboardHeading";

const GridContainer = styled.div`
  display: grid;
  grid-gap: 1.5em;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 190px 70px 190px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .layout-item {
    border-radius: 10px;
    overflow: hidden;
  }

  .layout-item:first-child {
    grid-column: 1/3;
    grid-row: 1/2;
  }

  .layout-item:nth-child(2),
  .layout-item:nth-child(3) {
    grid-row: 1/3;
  }
  .layout-item:nth-child(4),
  .layout-item:nth-child(5) {
    grid-row: 2/4;
  }

  .layout-item:last-child {
    grid-column: 3/5;
  }
`;

const DashboardPage = () => {
  return (
    <div>
      <DashboardHeading
        title="Dashboard"
        desc="Overview dashboard monitor"
      ></DashboardHeading>
      <GridContainer>
        <div className="layout-item">
          <img
            src="https://images.unsplash.com/photo-1679858511193-f124745ad28b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
        <div className="layout-item">
          <img
            src="https://images.unsplash.com/photo-1679764376519-807d8b7ea416?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
        </div>
        <div className="layout-item">
          <img
            src="https://images.unsplash.com/photo-1679817609557-3276360e35d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
        </div>
        <div className="layout-item">
          <img
            src="https://images.unsplash.com/photo-1679753918798-8aba0ae2f093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
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
      </GridContainer>
    </div>
  );
};

export default DashboardPage;
