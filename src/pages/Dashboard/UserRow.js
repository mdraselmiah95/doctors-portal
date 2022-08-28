import React from "react";

const UserRow = ({ user, refetch }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(`http://localhost:5000/users/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <tr>
      <th>1</th>
      <td>
        {email}
        {role === "admin" && (
          <span className="text-sm font-bold text-green-500"> ({role})</span>
        )}
      </td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-xs btn-error">Remove User</button>
      </td>
    </tr>
  );
};

export default UserRow;
