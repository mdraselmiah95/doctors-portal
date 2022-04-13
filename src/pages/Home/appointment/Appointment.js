import { makeStyles } from "@mui/material";
import React from "react";
import bg from "../../../images/appointment-bg.png";

const Appointment = () => {
  const useStyle = makeStyles({
    root: {
      background: `url(${bg}), linear-gradient(#3A4256,#3A4256)`,
      backgroundBlendMode: "overlay",
      backgroundRepeat: "no-repeat",
      height: 380,
      display: "flex",
      alignItems: "center",
      marginBottom: 200,
      marginTop: 200,
    },
  });
  const { root } = useStyle();
  return (
    <div>
      <h2>gf</h2>
    </div>
  );
};

export default Appointment;
