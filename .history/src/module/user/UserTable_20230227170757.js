import React from "react";
import { useState } from "react";
import ActionDelete from "../../components/action/ActionDelete";
import ActionEdit from "../../components/action/ActionEdit";
import ActionView from "../../components/action/ActionView";
import Table from "../../components/table/Table";

const UserTable = () => {
  const [userList, setListUsers] = useState([]);
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Fullname</th>
            <th>Username</th>
            <th>Email address</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
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

export default UserTable;
