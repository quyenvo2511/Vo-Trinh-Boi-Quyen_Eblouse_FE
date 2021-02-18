/**
 * Author: Quyen Vo
 * File name: BookingContent.js
 * Last Modified Date: 17/2/2021
 * Purpose: This component is showing list of booking in all status (approved, pending, cancelled, completed)
 *          Admin can see all bookings with all status
 */
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import ApprovedBooking from "./ApprovedBookings";
import PendingBookings from "./PendingBookings";
import CancelledBookings from "./CancelledBookings";
import CompletedBookings from "./CompletedBookings";

import bookingsActions from "../../../../redux/actions/bookings.actions";
import "../../../../style/BookingContent.css";
/**
 * This component is the parent component of ApprovedBookings, CancelledBookings, CompletedBookings
 * EmptyBookings, PendingBookings components
 */
const BookingContent = () => {
  const APPROVED_BOOKING = 1;
  const PENDING_BOOKING = 2;
  const CANCELLED_BOOKING = 3;
  const COMPLETED_BOOKING = 4;

  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  const bookings = useSelector((state) => state.bookings.bookings);
  const isLoading = useSelector((state) => state.bookings.isLoading);
  const [showMode, setShowMode] = useState(APPROVED_BOOKING);

  useEffect(() => {
    dispatch(bookingsActions.getBookingsList(user._id));
  }, [dispatch]);

  return (
    <Container fluid>
      {isLoading ? (
        <LoadingSpinner animation="border" color="danger" />
      ) : (
        <Row>
          {/* this col below is for menu side */}
          <Col md={3}>
            <div
              className={
                showMode === APPROVED_BOOKING
                  ? "admin-menu-item selected-admin-mode"
                  : "admin-menu-item"
              }
              onClick={() => setShowMode(APPROVED_BOOKING)}
            >
              <p>Approved appointment</p>
            </div>
            <div
              className={
                showMode === PENDING_BOOKING
                  ? "admin-menu-item selected-admin-mode"
                  : "admin-menu-item"
              }
              onClick={() => setShowMode(PENDING_BOOKING)}
            >
              <p>Pending appointment</p>
            </div>
            <div
              className={
                showMode === CANCELLED_BOOKING
                  ? "admin-menu-item selected-admin-mode"
                  : "admin-menu-item"
              }
              onClick={() => setShowMode(CANCELLED_BOOKING)}
            >
              <p>Cancelled appointment</p>
            </div>
            <div
              className={
                showMode === COMPLETED_BOOKING
                  ? "admin-menu-item selected-admin-mode"
                  : "admin-menu-item"
              }
              onClick={() => setShowMode(COMPLETED_BOOKING)}
            >
              <p>Completed appointment</p>
            </div>
          </Col>
          {/* this col below is for content of bookings which contain information, cancel/approved/done button */}
          <Col md={9}>
            {showMode === APPROVED_BOOKING ? (
              <ApprovedBooking bookings={bookings} user={user} />
            ) : showMode === PENDING_BOOKING ? (
              <PendingBookings bookings={bookings} user={user} />
            ) : showMode === CANCELLED_BOOKING ? (
              <CancelledBookings bookings={bookings} />
            ) : (
              <CompletedBookings bookings={bookings} />
            )}
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default BookingContent;
