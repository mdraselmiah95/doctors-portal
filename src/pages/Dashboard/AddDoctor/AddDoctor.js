import { TextField } from "@mui/material";

import React from "react";

const AddDoctor = () => {
  return (
    <div>
      <h2>Add a Doctor</h2>
      <form>
        <TextField
          sx={{ width: "50%" }}
          label="Name"
          required
          variant="standard"
        />
        <br />
        <TextField
          sx={{ width: "50%" }}
          label="Email"
          type="email"
          required
          variant="standard"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
