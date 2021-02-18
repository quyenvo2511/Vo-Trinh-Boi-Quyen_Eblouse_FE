/**
 * Author: Quyen Vo
 * File name: CancelledBookings.js
 * Last Modified Date: 17/2/2021
 * Purpose: This component is showing list of cancelled bookings
 *          Admin can see all bookings with status which is Cancelled
 */
import React from "react";
import { Container } from "react-bootstrap";
import EmptyBookingCard from "./EmptyBookingCard";
/**
 *
 * @param {Object} booking The Object containing all information data of booking that was mapped at component CancelledBookings
 */
const CancelledBookingCard = ({ booking }) => {
  const startDate = new Date(booking.startTime);
  const endDate = new Date(booking.endTime);

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
      </div>
    </div>
  );
};
/**
 *
 * @param {Object} bookings The Object containing all information data of booking from server side
 */
const CancelledBookings = ({ bookings }) => {
  const cancelledBookings = bookings.filter(
    (booking) => booking.status === "Cancelled"
  );

  return (
    <Container className="booking-card-wrapper" fluid>
      {cancelledBookings.length === 0 ? (
        <EmptyBookingCard content="There are no cancelled appointments at the moment" />
      ) : (
        cancelledBookings.map((booking) => (
          <CancelledBookingCard booking={booking} key={booking._id} />
        ))
      )}
    </Container>
  );
};

export default CancelledBookings;
