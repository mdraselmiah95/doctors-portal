import React from "react";
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Treatment = () => {
  return (
    <div className="md:flex justify-center items-center lg:py-36 lg:pl-40 lg:pr-20 py-16 px-2">
      <img
        src={treatment}
        alt="treatment"
        className=" md:w-[28.625rem] md:h-[36rem] rounded-lg md:mr-24 mr-8"
      />
      <div className="">
        <h2 className="md:text-5xl text-3xl font-bold text-textOne md:leading-extra">
          Exceptional Dental Care, on Your Terms
        </h2>
        <p className="md:pt-6 md:pb-11 py-4 text-base text-textOne">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using that it has a more-or-less normal distribution of letters,as
          opposed to using 'Content here, content here', making it look like
          readable English. Many desktop publishing packages and web page
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </div>
  );
};

export default Treatment;
