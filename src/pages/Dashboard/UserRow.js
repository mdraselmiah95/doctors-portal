import React from "react";

const UserRow = ({ user, refetch }) => {
  const { email, role } = user;
  return (
    <tr>
      <th>1</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && <button class="btn btn-xs">Make Admin</button>}
      </td>
      <td>
        <button className="btn btn-xs">Remove User</button>
      </td>
    </tr>
  );
};

export default UserRow;
