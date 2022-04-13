import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Banner from "../Banner/Banner";
import Doctors from "../doctors/Doctors";
import InfoCard from "../InfoCard/InfoCard";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <InfoCard />
      <Services />
      <AppointmentBanner />
      <Doctors />
    </div>
  );
};

export default Home;
