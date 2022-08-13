import React from "react";

const Review = ({ review }) => {
  return (
    <div className="shadow-xl card lg:max-w-lg bg-base-100">
      <div className="card-body">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          voluptates quo incidunt harum minus mollitia!
        </p>
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-16 mr-5 rounded-full ring ring-primary ring-offset-base-100">
              <img src={review.img} alt="" />
            </div>
          </div>
          <div>
            <h4 className="text-xl">{review.name}</h4>
            <p>{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
