import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patient=${user.email}`)
        .then((res) => res.json())
        .then((data) => setAppointments(data));
    }
  }, [user]);
  // console.log(appointments);
  //today
  var todayDate = new Date().toLocaleString("en-us", {
    month: "long",
    year: "numeric",
    day: "numeric",
  });
  return (
    <div>
      <div className="items-center justify-between mb-4 md:flex">
        <h2 className="text-2xl ">My Appointments: {appointments.length}</h2>
        <h2 className="p-3 mt-4 font-medium border border-black rounded-lg md:mt-0">
          {todayDate}
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a, index) => (
              <tr key={a._id}>
                <th>{index + 1}</th>
                <td>{a.patientName}</td>
                <td>{a.data}</td>
                <td>{a.slot}</td>
                <td>{a.treatment}</td>
                <td>
                  {/* {a.price && !a.paid && (
                    <Link to={`/dashboard/payment/${a._id}`}>
                      <button className="btn btn-xs btn-success">pay</button>
                    </Link>
                  )} */}
                  {/* {a.price && a.paid && (
                    <div>
                      <p>
                        <span className="text-success">Paid</span>
                      </p>
                      <p>
                        Transaction id:{" "}
                        <span className="text-success">{a.transactionId}</span>
                      </p>
                    </div>
                  )} */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
