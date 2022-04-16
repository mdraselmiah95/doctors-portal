import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import bg from "../../../images/bg.png";
import chair from "../../../images/chair.png";
import MuiButton from "../../../styledComponent/MuiButton";

const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: 400,
};

//setup Background
const style = {
  minHeight: 500,
  height: "100vh",
  display: "flex",
  alignItems: "center",
  background: `url(${bg})`,
};

const Banner = () => {
  return (
    <div style={style}>
      <Container>
        <Grid container spacing={2} sx={{ alignItems: "center" }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              Your New Smile <br />
              Starts Here
            </Typography>
            <Typography
              variant="body1"
              sx={{
                my: 3,
                color: "gray",
                lineHeight: 2,
              }}
            >
              How do you differentiate yourself in ultra-competitive Bay Area
              dentistry? You start by assembling a world.
            </Typography>

            {/* use Styled components here a Button  */}
            <MuiButton>Get Appointment</MuiButton>
          </Grid>
          <Grid item xs={12} md={6} style={verticalCenter}>
            <img style={{ width: "350px" }} src={chair} alt="" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;
