/**
 * Author: Quyen Vo
 * File name: bookingTimeTable.js
 * Last Modified Date: 15/2/2021
 */
import React from "react";

const BookingTimeTable = ({
  doctorId,
  bookingsList,
  date,
  setStartTime,
  startTime,
}) => {
  // activeBookings is an array, it contains 2 status of bookings (pending, accepted)
  // with two status above, users can not book that bookings
  const activeBookings = bookingsList.filter(
    (booking) => booking.status === "Pending" || booking.status === "Accepted"
  );
  // after filter bookings with 2 status
  // We will filter in  that bookings which are in same day

  const bookingsByDate = activeBookings.filter((booking) => {
    const startDate = booking.startTime.split("T")[0];
    return startDate === date.toISOString().split("T")[0];
  }); // [{_id: , status: "pending", date: "2021/2/17", doctor: "A"}
  //,{_id: , status: "accepted", date: "2021/2/17", doctor: "B"}...]

  // after filter by date then filter by doctor
  // now we filter all bookings belongs to 1 doctor
  const bookingsByDoctor = bookingsByDate.filter(
    (booking) => booking.doctor._id === doctorId
  ); // [{_id: , status: "pending", date: "2021/2/17", doctor: "A"},
  // {_id: , status: "accepted", date: "2021/2/17", doctor: "A"}...]

  const occupiedTimeSlot = bookingsByDoctor.map((booking) => {
    return new Date(booking.startTime).getHours();
  }); // return occupiedTimeSlot = [8, 14,...]

  /**
   * This component to check if the input if user is the same to
   * one of occiedTimeSLot in array then return true to disable the button
   *
   * @param {Number} time The input timing button
   */
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
            ? "disabled" // if true, the UI now of this button is disabled
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
