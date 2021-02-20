/**
 * Author: Quyen Vo
 * File name: BookingUser.js
 * Last Modified Date: 20/1/2021
 * Purpose: This component is using for get all bookings of a user
 */
import React from "react";
import { Table } from "react-bootstrap";
/**
 *
 * @param {Object} bookings The Object containing all information booking data
 */
const BookingUser = ({ bookings }) => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Clinic Name</th>
            <th>Doctor Name</th>
            <th>Specialization</th>
            <th>Booking date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={booking._id}>
              <td>{index + 1}</td>
              <td>{booking.clinic.name}</td>
              <td>{`${booking.doctor.firstName} ${booking.doctor.lastName}`}</td>
              <td>
                {booking.clinic.specializations
                  .map((specs) => specs.name)
                  .join("/")}
              </td>
              <td>{new Date(booking.startTime).toISOString().split("T")[0]}</td>
              <td>{booking.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default BookingUser;
