import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Services />
      <AppointmentBanner />
    </div>
  );
};

export default Home;
