import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import cavity from "../../../images/cavity.png";
import fluoride from "../../../images/fluoride.png";
import whitening from "../../../images/whitening.png";
import Service from "../Service/Service";

const services = [
  {
    name: "Fluoride Treatment",
    description:
      "If your cavity just started, a fluoride treatment may help restore your tooth's enamel and can sometimes reverse a cavity in the very early stages",
    img: fluoride,
  },
  {
    name: "Cavity Filling",
    description:
      "Regular checkups can identify cavities and other dental conditions before they cause troubling symptoms and lead to more-serious problems",
    img: cavity,
  },
  {
    name: "Teeth Whitening",
    description:
      "sparkle back into your smile! Our whitenings are both easy and non-invasive, and you can remove years of stain and color from your teeth in a single, one-hour treatment.",
    img: whitening,
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Service />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
