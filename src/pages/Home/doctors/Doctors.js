import React, { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import Doctor from "../doctor/Doctor";
const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("https://glacial-wave-71858.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div>
      <h2>Our Doctors: {doctors.length}</h2>
      <Container>
        <Grid container spacing={2}>
          {doctors.map((doctor) => (
            <Doctor key={doctor._id} doctor={doctor} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Doctors;
