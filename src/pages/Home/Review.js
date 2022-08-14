import React from "react";

const Review = ({ review }) => {
  return (
    <div className="shadow-xl card lg:max-w-lg bg-base-100">
      <div className="card-body">
        <p>
          It is a long established fact that by the readable content of a lot
          layout. The point of using Lorem a more-or-less normal distribute to
          using Content here, content.
        </p>
        <div className="flex items-center mt-9">
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
