import React from "react";
import { Link } from "react-router-dom";
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Treatment = () => {
  return (
    <div className="items-center justify-center px-2 py-16 md:flex lg:py-36 lg:pl-40 lg:pr-20">
      <img
        src={treatment}
        alt="treatment"
        className=" md:w-[28.625rem] md:h-[36rem] rounded-lg md:mr-24 mr-8"
      />
      <div className="">
        <h2 className="text-3xl font-bold md:text-5xl text-textOne md:leading-extra">
          Exceptional Dental Care, on Your Terms
        </h2>
        <p className="py-4 text-base md:pt-6 md:pb-11 text-textOne">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using that it has a more-or-less normal distribution of letters,as
          opposed to using 'Content here, content here', making it look like
          readable English. Many desktop publishing packages and web page
        </p>
        <Link to="/appointment">
          <PrimaryButton>Get Started</PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default Treatment;
