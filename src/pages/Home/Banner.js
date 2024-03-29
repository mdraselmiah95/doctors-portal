import React from "react";
import { Link } from "react-router-dom";
import chair from "../../assets/images/chair.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
  return (
    <div className="min-h-screen hero bg-[url('/src/assets/images/bg.png')]">
      <div className="flex-col hero-content lg:flex-row-reverse ">
        <img
          src={chair}
          className="rounded-lg shadow-2xl lg:h-[22.188rem] lg:w-[37.125rem]"
          alt="chair"
          // style={{ width: "594px", height: "355px" }}
        />
        <div>
          <h1 className="text-5xl font-bold text-textOne leading-extra">
            Your New Smile Starts <br /> Here
          </h1>
          <p className="py-6 text-base text-textOne">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to="/appointment">
            <PrimaryButton>Get Started</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
