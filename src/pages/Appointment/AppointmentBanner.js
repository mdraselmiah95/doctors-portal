import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    // Background Image
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
          className="lg:h-[20.5rem] lg:w-[36.5rem] rounded-lg shadow-2xl lg:ml-28"
          alt="Dentist Chair"
        />
        <div>
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
            modifiersClassNames={{
              selected: "my-selected",
              today: "my-today",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
