import { Container, Typography } from "@mui/material";
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
    <Box sx={{ flexGrow: 1, marginTop: 10, textAlign: "center" }}>
      <Container>
        <Typography
          sx={{
            fontWeight: 500,
            m: 2,
            color: "#5BC6C6",
          }}
          variant="h5"
          component="div"
        >
          OUR SERVICES
        </Typography>
        <Typography
          sx={{ fontWeight: 600, m: 3, marginBottom: 10 }}
          variant="h4"
          component="div"
        >
          Services We Provide
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service key={service.name} service={service} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
