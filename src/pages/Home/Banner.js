import React from "react";
import chair from "../../assets/images/chair.png";

const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className=" rounded-lg shadow-2xl"
          alt="chair"
          style={{ width: "594px", height: "355px" }}
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
          {/* <PrimaryButton>Get Started</PrimaryButton> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;