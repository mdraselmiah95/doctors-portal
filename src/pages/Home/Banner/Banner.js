import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import bg from "../../../images/bg.png";
import chair from "../../../images/chair.png";
const bannerBg = {
  background: `url(${bg})`,
};

const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: 400,
};

const Banner = () => {
  return (
    <Container sx={{ flexGrow: 1 }} style={bannerBg}>
      <Grid container spacing={2}>
        <Grid
          item
          style={{ ...verticalCenter, textAlign: "left" }}
          xs={12}
          md={6}
        >
          <Box>
            <Typography variant="h3">
              Your New Smile <br />
              Starts Here
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 3, fontSize: 14, fontWeight: 300, color: "gray" }}
            >
              How do you differentiate yourself in ultra-competitive Bay Area
              dentistry? You start by assembling a world.
            </Typography>
            <Button variant="contained" style={{ backgroundColor: "#5CE7ED" }}>
              Get Appointment
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{ width: "350px" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
