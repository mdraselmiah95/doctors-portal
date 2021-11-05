import { CardMedia, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
const Service = (props) => {
  const { description, img, name } = props.service;
  return (
    <Grid item xs={2} sm={4} md={4}>
      <Card sx={{ minWidth: 275 }}>
        <CardMedia
          component="img"
          style={{ width: "auto", height: "76px", margin: "0 auto" }}
          image={img}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {name}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Service;
