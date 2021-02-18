/**
 * Author: Quyen Vo
 * File name: PendingBookings.js
 * Last Modified Date: 17/2/2021
 * Purpose: This component is showing list of pending bookings
 *          Admin can see all Pending bookings, cancel/approved bookings
 */
import React from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import bookingsActions from "../../../../redux/actions/bookings.actions";
import EmptyBookingCard from "./EmptyBookingCard";
/**
 *
 * @param {Object} booking The Object containing all information data of booking that was mapped at component CancelledBookings
 * @param {Object} user The Object containing all information data of user from server side
 */
const PendingBookingCard = ({ booking, user }) => {
  const dispatch = useDispatch();

  const startDate = new Date(booking.startTime);
  const endDate = new Date(booking.endTime);

  const handleAcceptBooking = () => {
    dispatch(bookingsActions.acceptBookingRequest(user._id, booking._id));
  };

  const handleCancelBooking = () => {
    dispatch(bookingsActions.cancelBookingRequest(user._id, booking._id));
  };

  return (
    <div className="booking-card">
      <div className="doctor-info">
        <img
          className="doctor-avatar"
          src={booking.doctor.avatarUrl}
          alt="Doctor Avatar"
        />
        <p className="doctor-name">
          <strong>Doctor:</strong>{" "}
          {`${booking.doctor.firstName} ${booking.doctor.lastName}`}
        </p>
      </div>
      <div className="patient-info">
        <img
          className="user-avatar"
          src={booking.user.avatarUrl}
          alt="Patient Avatar"
        />

        <p className="patient-name">
          <strong>Patient: </strong> {booking.user.name}
        </p>
      </div>
      <div className="booking-info">
        <p>
          <strong>Date: </strong>
          <span style={{ color: "grey", fontStyle: "italic" }}>
            {startDate.toDateString()}
          </span>
        </p>
        <p>
          <strong>Start time: </strong>
          <span
            style={{ color: "grey", fontStyle: "italic" }}
          >{`${startDate.getHours()}:${startDate.getMinutes()}`}</span>
        </p>
        <p>
          <strong>End time: </strong>
          <span
            style={{ color: "grey", fontStyle: "italic" }}
          >{`${endDate.getHours()}:${endDate.getMinutes()}`}</span>
        </p>
        <p>
          <strong>Reason: </strong>
          <span style={{ fontSize: "0.8em" }}>{booking.reason}</span>
        </p>
      </div>
      <div className="booking-action">
        <p>
          <strong>Status: </strong>
          <span style={{ color: "#e27802", fontWeight: "bold" }}>
            {booking.status}
          </span>
        </p>
        <div className="pending-btns">
          <button className="cancel-booking-btn" onClick={handleCancelBooking}>
            Cancel
          </button>
          <button className="approve-booking-btn" onClick={handleAcceptBooking}>
            Approve
          </button>
        </div>
      </div>
    </div>
  );
};
/**
 *
 * @param {Object} bookings The Object containing all information data of booking from server side
 * @param {Object} user The Object containing all information data of user from server side
 */
const PendingBookings = ({ bookings, user }) => {
  const pendingBookings = bookings.filter(
    (booking) => booking.status === "Pending"
  );

  return (
    <Container className="booking-card-wrapper" fluid>
      {pendingBookings.length === 0 ? (
        <EmptyBookingCard content="There are no pending appointments at the moment" />
      ) : (
        pendingBookings.map((booking) => (
          <PendingBookingCard booking={booking} key={booking._id} user={user} />
        ))
      )}
    </Container>
  );
};

export default PendingBookings;
