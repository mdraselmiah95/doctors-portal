import { Container, Grid } from "@mui/material";
import React from "react";
import chair from "../../../images/chair.png";
const AppointmentHeader = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={6}>
          <img src={chair} alt="chair" style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AppointmentHeader;
