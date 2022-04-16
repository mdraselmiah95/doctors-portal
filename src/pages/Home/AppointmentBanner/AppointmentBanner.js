import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import bg from "../../../images/appointment-bg.png";
import doctor from "../../../images/doctor.png";

//Background banner creating Dynamically
const appointmentBanner = {
  background: `url(${bg})`,
  backgroundColor: "rgba(45, 58, 74, 0.9)",
  backgroundBlendMode: "darken, luminosity",
  backgroundPosition: "center",
  marginTop: 175,
};

const AppointmentBanner = () => {
  return (
    <Box sx={{ flexGrow: 1 }} style={appointmentBanner}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            src={doctor}
            alt="doctor"
            style={{ width: 400, marginTop: -115 }}
          />
        </Grid>
        <Grid
          item
          xs={4}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            textAlign: "left",
          }}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{ mb: 3 }}
              style={{ color: "#5CE7ED" }}
            >
              Appointment
            </Typography>
            <Typography variant="h4" style={{ color: "white" }}>
              Make an Appointment Today
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 3 }}
              style={{ color: "white", fontSize: 14, fontWeight: 300 }}
            >
              Dental is re-imagining what the dental experience can be and
              proudly setting a new standard for patient care.
            </Typography>
            <Button variant="contained" style={{ backgroundColor: "#5CE7ED" }}>
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
