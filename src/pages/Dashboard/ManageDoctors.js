import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);

  // React Query
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctor", () =>
    fetch("http://localhost:5000/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  // const {
  //   data: doctors,
  //   isLoading,
  //   refetch,
  // } = useQuery("doctors", () =>
  //   fetch("http://localhost:5000/doctor", {
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //   }).then((res) => res.json())
  // );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2>Manage Doctors{doctors.length}</h2>
    </div>
  );
};

export default ManageDoctors;
<h2>Manage Doctors</h2>;
