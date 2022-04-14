import { Container, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

import bg from "../../../images/appointmentbg.png";

const Contact = () => {
  const useStyle = makeStyles({
    root: {
      background: `url(${bg}), linear-gradient(#3A4256,#3A4256)`,
      backgroundBlendMode: "overlay",
      backgroundRepeat: "no-repeat",
      textAlign: "center",
      padding: "30px",
      marginTop: 100,
    },
    textArea: {
      border: 0,
      outline: 0,
      width: "100%",
      margin: "20px 0",
      borderRadius: 3,
      fontFamily: "inherit",
      padding: 15,
    },
  });
  const { root, textArea } = useStyle();
  return (
    <div>
      <h1>f</h1>
    </div>
  );
};

export default Contact;
