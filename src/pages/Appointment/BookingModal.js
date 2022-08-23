import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const BookingModal = ({ date, treatment, setTreatment }) => {
  const { _id, name, slots, price } = treatment;
  const [user, loading, error] = useAuthState(auth);
  const formattedDate = format(date, "PP");

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    console.log(_id, name, slot);
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="absolute btn btn-sm btn-circle right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center text-secondary mb-11">
            Booking for: {name}
          </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-2 justify-items-center"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="w-full max-w-xs input input-bordered"
            />
            <select
              name="slot"
              className="w-full max-w-xs select select-bordered"
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              value={user?.displayName || ""}
              disabled
              className="w-full max-w-xs input input-bordered"
            />
            <input
              type="email"
              name="email"
              value={user?.email || ""}
              disabled
              className="w-full max-w-xs input input-bordered"
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              className="w-full max-w-xs input input-bordered"
            />
            <input
              type="submit"
              value="Submit"
              className="w-full max-w-xs btn btn-secondary"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
