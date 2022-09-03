import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const AllAppointment = () => {
  const { data: appointments, isLoading } = useQuery("allAppointment", () =>
    fetch("https://doctors-portals-by-rasel.herokuapp.com/appointments", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  const todayDate = new Date().toLocaleString("en-us", {
    month: "long",
    year: "numeric",
    day: "numeric",
  });

  return (
    <div className=" pb-5">
      <div className="items-center justify-between mb-4 md:flex">
        <h2 className="text-2xl ">
          My Appointments:
          <span className="font-bold ">{appointments.length}</span>
        </h2>
        <h2 className="p-3 mt-4 font-medium border border-black rounded-lg md:mt-0">
          {todayDate}
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="text-black ">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Phone</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a, index) => (
              <tr key={a._id} className="text-black ">
                <th>{index + 1}</th>
                <td>{a.patientName}</td>
                <td>{a.data}</td>
                <td>{a.slot}</td>
                <td>{a.phone}</td>
                <td>{a.treatment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllAppointment;
