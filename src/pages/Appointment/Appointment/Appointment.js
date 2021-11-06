import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import AvailableAppointments from "../AvailableAppointments/AvailableAppointments";

const Appointment = () => {
  return (
    <div>
      <Navigation />
      <AppointmentHeader />
      <AvailableAppointments />
    </div>
  );
};

export default Appointment;
