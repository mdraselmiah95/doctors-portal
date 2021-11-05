import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import bg from "../../../images/appointment-bg.png";
import doctor from "../../../images/doctor.png";

const appointmentBanner = {
  background: `url(${bg})`,
};

const AppointmentBanner = () => {
  return (
    <Box sx={{ flexGrow: 1 }} style={appointmentBanner}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img src={doctor} alt="doctor" style={{ width: 400 }} />
        </Grid>
        <Grid item xs={4} md={6}>
          <Typography variant="h5" sx={{ mb: 5 }} style={{ color: "#5CE7ED" }}>
            Appointment
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
