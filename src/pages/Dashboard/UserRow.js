import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(
      `https://doctors-portals-by-rasel.herokuapp.com/users/admin/${email}`,
      {
        method: "PUT",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an admin");
        }
        return res.json();
      })

      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an admin`);
        }
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
