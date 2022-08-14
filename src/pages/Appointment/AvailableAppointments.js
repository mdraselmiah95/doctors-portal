import React from "react";
import { format } from "date-fns";

const AvailableAppointments = ({ date }) => {
  return (
    <div className="my-10">
      <h4 className="text-xl text-secondary text-center my-12">
        Available Appointments on: {format(date, "PP")}
      </h4>
    </div>
  );
};

export default AvailableAppointments;
