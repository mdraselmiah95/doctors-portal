import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const Appointments = () => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/appointments?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);
  return (
    <div>
      <h2>Appointments {appointments.length}</h2>
    </div>
  );
};

export default Appointments;
