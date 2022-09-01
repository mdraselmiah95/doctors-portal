import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

// Connect with Stripe
const stripePromise = loadStripe(
  "pk_test_51Jw6SKHMt687dAra9sxMSE3nLy5pM9HeNqThwsGNox6xrDosPrH58ciSutmFgE9p4qhGYEBunlsp1WXeNIHBZSdG00BnwCZuqs"
);

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;

  // React Query
  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="">
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <p className="text-success font-bold">
            Hello, {appointment.patientName}
          </p>
          <h2 className="card-title">Please Pay for {appointment.treatment}</h2>
          <p>
            Your Appointment:
            <span className=" text-orange-400">{appointment.date}</span>at
            <span> {appointment.slot}</span>
          </p>
          <p className=" font-medium">
            Please pay:
            <span className=" font-bold"> ${appointment.price}</span>
          </p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
