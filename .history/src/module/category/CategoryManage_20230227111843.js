import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import ActionDelete from "../../components/action/ActionDelete";
import ActionEdit from "../../components/action/ActionEdit";
import ActionView from "../../components/action/ActionView";
import Button from "../../components/button/Button";
import LabelStatus from "../../components/label/LabelStatus";
import Table from "../../components/table/Table";
import { db } from "../../firebase-app/firebase-config";
import { categoryStatus } from "../../utils/constants";
import DashboardHeading from "../dashboard/DashboardHeading";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";

const CategoryManage = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [categoryCount, setCategoryCount] = useState(0);
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");
  useEffect(() => {
    document.title = "Monkey Blogging - Categories";
  }, []);
  useEffect(() => {
    const colRef = collection(db, "categories");
    const newRef = filter
      ? query(
          colRef,
          where("name", ">=", filter),
          where("name", "<=", filter + "utf8")
        )
      : colRef;
    onSnapshot(newRef, (snapshot) => {
      let results = [];
      setCategoryCount(Number(snapshot.size));
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setCategoryList(results);
    });
  }, [filter]);
  const handleDeleteCategory = async (docId) => {
    const colRef = doc(db, "categories", docId);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteDoc(colRef);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  const handleInputFilter = debounce((e) => {
    setFilter(e.target.value);
  }, 500);
  return (
    <div>
      <DashboardHeading title="Categories" desc="Manage your category">
        <Button kind="ghost" height="60px" to="/manage/add-category">
          Create category
        </Button>
      </DashboardHeading>
      <div className="mb-10 flex justify-end ">
        <input
          type="text"
          placeholder="Search category..."
          className="p-4 px-5 border border-gray-500 rounded-lg"
          // onChange={(e) => setFilter(e.target.value)} // tìm kiếm chính xác
          onChange={handleInputFilter}
        />
      </div>
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
          {categoryList.length > 0 &&
            categoryList.map((category) => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>
                  <span className="italic text-gray-400">{category.slug}</span>
                </td>
                <td>
                  {Number(category.status) === categoryStatus.APPROVED && (
                    <LabelStatus type="success">Approved</LabelStatus>
                  )}
                  {Number(category.status) === categoryStatus.UNAPPROVED && (
                    <LabelStatus type="warning">Unapproved</LabelStatus>
                  )}
                </td>
                <td>
                  <div className="flex items-center gap-x-3">
                    <ActionView></ActionView>
                    <ActionEdit
                      onClick={() =>
                        navigate(`/manage/update-category?id=${category.id}`)
                      }
                    ></ActionEdit>
                    <ActionDelete
                      onClick={() => handleDeleteCategory(category.id)}
                    ></ActionDelete>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <div className="mt-10">
        <button>Load more</button>
      </div>
    </div>
  );
};

export default CategoryManage;
