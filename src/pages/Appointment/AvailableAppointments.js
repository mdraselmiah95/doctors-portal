import React, { useState } from "react";
import { useQuery } from "react-query";
import { format } from "date-fns";
import Service from "./Service";
import BookingModal from "./BookingModal";
import Loading from "../Shared/Loading";

const AvailableAppointments = ({ date }) => {
  const [treatment, setTreatment] = useState(null);

  const formattedDate = format(date, "PP");
  // Fetching data using React Query
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(
      `https://doctors-portals-by-rasel.herokuapp.com/available?date=${formattedDate}`
    ).then((res) => res.json())
  );

  // Loading
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="my-10">
      <h4 className="my-12 text-xl text-center text-secondary">
        Available Appointments on: {format(date, "PP")}
      </h4>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services?.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></Service>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          refetch={refetch}
          treatment={treatment}
          setTreatment={setTreatment}
        />
      )}
    </div>
  );
};

export default AvailableAppointments;

/**
 * 
 * const [services, setServices] = useState([]);
  //fetching data from local server normal system
  useEffect(() => {
    fetch(`https://doctors-portals-by-rasel.herokuapp.com/available?date=${formattedDate}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [formattedDate]);
*/
