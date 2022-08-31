import React from "react";
import { toast } from "react-toastify";

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor, _id }) => {
  const { name, specialty, img, email } = doctor;

  const handleDelete = (email) => {
    fetch(`http://localhost:5000/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Doctor: ${name} is deleted.`);
          refetch();
        }
      });
  };
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="avatar">
            <div className="w-8 rounded">
              <img src={img} alt={name} />
            </div>
          </div>
        </td>
        <td>{name}</td>
        <td>{specialty}</td>
        <td>
          <label
            onClick={() => handleDelete(email)}
            htmlFor="delete-confirm-modal"
            className="btn btn-xs btn-error"
          >
            Delete
          </label>
        </td>
      </tr>
    </>
  );
};

export default DoctorRow;
