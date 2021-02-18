import React from "react";

const BookingTimeTable = ({
  doctorId,
  bookingsList,
  date,
  setStartTime,
  startTime,
}) => {
  // activeBookings is an array, it contains 2 status of bookings (pending, accepted)
  // with two status above, users can book that bookings
  const activeBookings = bookingsList.filter(
    (booking) => booking.status === "Pending" || booking.status === "Accepted"
  );

  const bookingsByDate = activeBookings.filter((booking) => {
    const startDate = booking.startTime.split("T")[0];
    return startDate === date.toISOString().split("T")[0];
  });

  const bookingsByDoctor = bookingsByDate.filter(
    (booking) => booking.doctor._id === doctorId
  );

  const occupiedTimeSlot = bookingsByDoctor.map((booking) => {
    return new Date(booking.startTime).getHours();
  });

  const checkedOccupiedTimeSlot = (time) => {
    for (let i = 0; i < occupiedTimeSlot.length; i++) {
      if (occupiedTimeSlot[i] === time) return true;
    }

    return false;
  };

  return (
    <div className="booking-time-table">
      <button
        className={
          checkedOccupiedTimeSlot(8)
            ? "disabled"
            : startTime === 8
            ? "selected"
            : "booking-time-input"
        }
        disabled={checkedOccupiedTimeSlot(8)}
        onClick={(e) => {
          e.preventDefault();
          setStartTime(8);
        }}
      >
        8:00 - 9:00
      </button>
      <button
        className={
          checkedOccupiedTimeSlot(9)
            ? "disabled"
            : startTime === 9
            ? "selected"
            : "booking-time-input"
        }
        disabled={checkedOccupiedTimeSlot(9)}
        onClick={(e) => {
          e.preventDefault();
          setStartTime(9);
        }}
      >
        9:00 - 10:00
      </button>
      <button
        className={
          checkedOccupiedTimeSlot(10)
            ? "disabled"
            : startTime === 10
            ? "selected"
            : "booking-time-input"
        }
        disabled={checkedOccupiedTimeSlot(10)}
        onClick={(e) => {
          e.preventDefault();
          setStartTime(10);
        }}
      >
        10:00 - 11:00
      </button>
      <button
        className={
          checkedOccupiedTimeSlot(13)
            ? "disabled"
            : startTime === 13
            ? "selected"
            : "booking-time-input"
        }
        disabled={checkedOccupiedTimeSlot(13)}
        onClick={(e) => {
          e.preventDefault();
          setStartTime(13);
        }}
      >
        13:00 - 14:00
      </button>
      <button
        className={
          checkedOccupiedTimeSlot(14)
            ? "disabled"
            : startTime === 14
            ? "selected"
            : "booking-time-input"
        }
        disabled={checkedOccupiedTimeSlot(14)}
        onClick={(e) => {
          e.preventDefault();
          setStartTime(14);
        }}
      >
        14:00 - 15:00
      </button>
      <button
        className={
          checkedOccupiedTimeSlot(15)
            ? "disabled"
            : startTime === 15
            ? "selected"
            : "booking-time-input"
        }
        disabled={checkedOccupiedTimeSlot(15)}
        onClick={(e) => {
          e.preventDefault();
          setStartTime(15);
        }}
      >
        15:00 - 16:00
      </button>
    </div>
  );
};
export default BookingTimeTable;
