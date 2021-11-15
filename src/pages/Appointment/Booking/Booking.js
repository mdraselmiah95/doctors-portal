import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import React from "react";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking, date, setBookingSuccess }) => {
  const { name, time, space, price } = booking;
  const [openBooking, setBookingOpen] = React.useState(false);
  const handleBookingOpen = () => setBookingOpen(true);
  const handleBookingClose = () => setBookingOpen(false);

  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ py: 5 }}>
          <Typography
            sx={{ color: "#1CC7C1", fontWeight: 600 }}
            variant="h5"
            gutterBottom
            component="div"
          >
            {name}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            {time}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            {price}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            {space} SPACES AVAILABLE
          </Typography>
          <Button
            onClick={handleBookingOpen}
            variant="contained"
            sx={{ backgroundColor: "#1CC7C1" }}
          >
            BOOK APPOINTMENT
          </Button>
        </Paper>
      </Grid>

      <BookingModal
        date={date}
        booking={booking}
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
        setBookingSuccess={setBookingSuccess}
      ></BookingModal>
    </>
  );
};

export default Booking;
