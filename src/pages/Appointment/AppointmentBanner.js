import React from "react";

import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";

const AppointmentBanner = () => {
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
      }}
      className="hero min-h-screen"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Dentist Chair"
        />
        {/* <div>
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div> */}
      </div>
    </div>
  );
};

export default AppointmentBanner;
