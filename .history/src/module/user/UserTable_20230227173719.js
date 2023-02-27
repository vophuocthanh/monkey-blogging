import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect } from "react";
import { useState } from "react";
import ActionDelete from "../../components/action/ActionDelete";
import ActionEdit from "../../components/action/ActionEdit";
import ActionView from "../../components/action/ActionView";
import Table from "../../components/table/Table";
import { db } from "../../firebase-app/firebase-config";

const UserTable = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const colRef = collection(db, "users");
    onSnapshot(colRef, (snapshot) => {
      const results = [];
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setUserList(results);
    });
  }, []);
  const renderUserItem = (user) => {
    console.log("renderUserItem ~ user", user);
    return (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.fullname}</td>
        <td>{user?.username}</td>
        <td>{user.email}</td>
        <td>{user.status}</td>
        <td></td>
        <td>
          <div className="flex items-center gap-x-3">
            <ActionView></ActionView>
            <ActionEdit></ActionEdit>
            <ActionDelete></ActionDelete>
          </div>
        </td>
      </tr>
    );
  };
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Info</th>
            <th>Username</th>
            <th>Email address</th>
            <th>Status</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.length > 0 && userList.map((user) => renderUserItem(user))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserTable;