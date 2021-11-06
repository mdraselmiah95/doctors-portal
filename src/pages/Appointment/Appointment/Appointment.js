import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import AvailableAppointments from "../AvailableAppointments/AvailableAppointments";

const Appointment = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <div>
      <Navigation />
      <AppointmentHeader date={date} setDate={setDate} />
      <AvailableAppointments date={date} />
    </div>
  );
};

export default Appointment;
