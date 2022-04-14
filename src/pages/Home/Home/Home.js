import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import About from "../about/About";
import Appointment from "../appointment/Appointment";
import Banner from "../Banner/Banner";
import Blogs from "../blogs/Blogs";
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
      <About />
      <Appointment />
      <Blogs />
      <Doctors />
    </div>
  );
};

export default Home;
