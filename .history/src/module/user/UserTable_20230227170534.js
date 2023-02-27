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
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Võ Phước Thạnh</td>
            <td>phuocthanh2k03@gmail.com</td>
            <td>Active</td>
            <td>Admin</td>
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
