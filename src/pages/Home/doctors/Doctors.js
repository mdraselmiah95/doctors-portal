import React, { useState, useEffect } from "react";
import { Container, Grid, Typography } from "@mui/material";
import Doctor from "../doctor/Doctor";
const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  //heroku server
  useEffect(() => {
    fetch("https://glacial-wave-71858.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div>
      <Typography
        color="#19D3AE"
        sx={{ textAlign: "center", my: 2, fontWeight: 600 }}
        variant="h4"
      >
        Our Doctors: {doctors.length}
      </Typography>
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
