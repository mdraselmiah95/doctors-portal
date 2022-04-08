import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51Jw6SKHMt687dAra9sxMSE3nLy5pM9HeNqThwsGNox6xrDosPrH58ciSutmFgE9p4qhGYEBunlsp1WXeNIHBZSdG00BnwCZuqs"
);

const Payment = () => {
  const { appointmentId } = useParams();
  const [appointment, setAppointment] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/appointments/${appointmentId}`)
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [appointmentId]);
  return (
    <div>
      <h2>
        Please Pay for: {appointment.patientName} for {appointment.serviceName}
      </h2>
      <h4>Pay: ${appointment.price}</h4>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;
