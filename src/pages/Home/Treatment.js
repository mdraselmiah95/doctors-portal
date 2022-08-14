import React from "react";
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Treatment = () => {
  return (
    <div className="flex justify-center items-center py-36 pl-56 pr-40">
      <img
        src={treatment}
        alt="treatment"
        className=" w-[28.625rem] h-[36rem]"
      />
      <div className=" p-24">
        <h2 className="text-5xl font-bold text-textOne leading-extra">
          Exceptional Dental Care, on Your Terms
        </h2>
        <p className="py-6 text-base text-textOne">
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
