import { Button, Input, TextField } from "@mui/material";

import React, { useState } from "react";

const AddDoctor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);

  return (
    <div>
      <h2>Add a Doctor</h2>
      <form>
        <TextField
          sx={{ width: "50%" }}
          label="Name"
          required
          onChange={(e) => setName(e.target.value)}
          variant="standard"
        />
        <br />
        <TextField
          sx={{ width: "50%" }}
          label="Email"
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          variant="standard"
        />
        <br />
        <Input type="file" accept="image/*" />
        <br />
        <Button variant="contained" type="submit">
          Add Doctor
        </Button>
      </form>
    </div>
  );
};

export default AddDoctor;
