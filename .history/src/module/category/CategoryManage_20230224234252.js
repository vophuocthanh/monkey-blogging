import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import ActionDelete from "../../components/action/ActionDelete";
import ActionEdit from "../../components/action/ActionEdit";
import ActionView from "../../components/action/ActionView";
import Button from "../../components/button/Button";
import LabelStatus from "../../components/label/LabelStatus";
import Table from "../../components/table/Table";
import { db } from "../../firebase-app/firebase-config";
import DashboardHeading from "../dashboard/DashboardHeading";

const CategoryManage = () => {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    document.title = "Monkey Blogging - Categories";
  }, []);
  useEffect(() => {
    const colRef = collection(db, "categories");
    onSnapshot(colRef, (snapshot) => {
      let results = [];
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id(),
          ...doc.data(),
        });
      });
      setCategoryList(results);
    });
  }, []);
  console.log(categoryList);
  return (
    <div>
      <DashboardHeading title="Categories" desc="Manage your category">
        <Button kind="ghost" height="60px" to="/manage/add-category">
          Create category
        </Button>
      </DashboardHeading>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Slug</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>Frontend Developer</td>
            <td>
              <span className="italic text-gray-400" a>
                frontend-developer
              </span>
            </td>
            <td>
              <LabelStatus type="success">Approved</LabelStatus>
            </td>
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

export default CategoryManage;
