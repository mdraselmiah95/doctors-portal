import { CardMedia, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
const Service = (props) => {
  const { description, img, name } = props.service;
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
        <CardMedia
          component="img"
          style={{ width: "auto", height: "76px", margin: "0 auto" }}
          image={img}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="h5" component="div"></Typography>
          <Typography
            sx={{ my: 2, fontWeight: 500 }}
            color="text.secondary"
            variant="h5"
          >
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Service;
