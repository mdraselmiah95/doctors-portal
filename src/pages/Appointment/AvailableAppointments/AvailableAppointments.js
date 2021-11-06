import React from "react";

const AvailableAppointments = ({ date }) => {
  return (
    <div>
      <h2 style={{ color: "skyBlue" }}>
        AvailableAppointments on: {date.toDateString()}
      </h2>
    </div>
  );
};

export default AvailableAppointments;
