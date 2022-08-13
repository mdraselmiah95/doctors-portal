import React from "react";
import Banner from "./Banner";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";

const Home = () => {
  return (
    <div className="px-4 lg:px-12">
      <Banner />
      <Info />
      <Services />
      <MakeAppointment />
    </div>
  );
};

export default Home;
