import { makeStyles } from "@mui/styles";
import React from "react";

const useStyle = makeStyles({
  socialIcon: {
    color: "#19D3AE !important",
    border: "1px solid #19D3AE !important",
    margin: "20px 10px 30px 0 !important",
    "&:hover": {
      background: "#19D3AE !important",
      color: "#fff !important",
    },
  },
});
const Footer = () => {
  const { socialIcon } = useStyle();
  return (
    <div>
      <h1>g</h1>
    </div>
  );
};

export default Footer;
