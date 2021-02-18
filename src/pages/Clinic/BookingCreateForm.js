/**
 * Author: Quyen Vo
 * Last Date Modified: 30/1/2021
 * Purpose: This component will be used in ClinicDetailPage
 *          It will allow user book an appointment with a doctor of a Clinic
 */
import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import BookingTimeTable from "../Clinic/BookingTimeTable";

import LoadingSpinner from "../../components/LoadingSpinner";
import bookingsActions from "../../redux/actions/bookings.actions";
/**
 *
 * @param {String} doctorId The String representing for Id of a doctor
 * @param {Object} BookingsList The Object containing all bookings data
 * @param {String} date The String representing for date (day, month, year)
 * @param {Function} setStartTime The Function to change the Time
 * @param {Number} startTime The Number representing for the hours of time
 */

/**
 * This component is controlling the form and submit an appointment booking
 * @param {Array} doctors The Array contains information all doctors in the clinic
 * @param {String} clinicId The String representing for Id of a clinic
 */
const BookingCreateForm = ({ doctors, clinicId }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0]._id);
  const [visitReason, setVisitReason] = useState("");
  const [bookingDate, setBookingDate] = useState(new Date());
  const [startTime, setStartTime] = useState(0);

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.bookings.isLoading);
  const bookings = useSelector((state) => state.bookings.bookings);

  useEffect(() => {
    dispatch(bookingsActions.getBookingsList(clinicId));
  }, [dispatch]);
  // get data in the input of selected doctor
  const handleSelectDoctor = (e) => {
    setSelectedDoctor(e.target.value);
    setStartTime(0);
  };
  // get data input from user
  const handleChangeReason = (e) => {
    setVisitReason(e.target.value);
  };
  // get data date of input date from user
  const handleDateChange = (e) => {
    setBookingDate(new Date(e.target.value));
    setStartTime(0);
  };
  // find the minimum the date that user can choose
  const hanldeDateMin = () => {
    let currDate = new Date();
    currDate.setDate(currDate.getDate() + 1);
    return currDate;
  };
  // submit the form and complete the booking
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDoctor) {
      e.stopPropagation();
      toast.error("Please select a doctor");
    } else if (visitReason === "") {
      e.stopPropagation();
      toast.error("Please enter a reason for your appointment");
    } else if (!bookingDate) {
      e.stopPropagation();
      toast.error("Please select a date for your appointment");
    } else if (startTime === 0) {
      e.stopPropagation();
      toast.error("Please select a time for your appointment");
    } else {
      bookingDate.setHours(startTime, 0, 0);
      const endTime = new Date(bookingDate.getTime() + 3600 * 1000);
      // object bookingInfo containing all compulsory information of booking
      const bookingInfo = {};
      bookingInfo.clinicId = clinicId;
      bookingInfo.doctor = selectedDoctor;
      bookingInfo.startTime = bookingDate;
      bookingInfo.endTime = endTime;
      bookingInfo.reason = visitReason;

      const accessToken = localStorage.getItem("accessToken");
      dispatch(bookingsActions.createBookingRequest(bookingInfo, accessToken));
      setStartTime(0);
    }
  };

  return (
    <div className="booking">
      <div className="booking-box">
        <h3 style={{ padding: "20px 0px" }}>Booking an Appoinment</h3>
        {isLoading ? (
          <LoadingSpinner animation="border" color="danger" />
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="bookingForm.Reason">
              <Form.Label>What is the reason for your visit?</Form.Label>
              <Form.Control
                type="text"
                placeholder="Reason for visiting"
                value={visitReason}
                onChange={handleChangeReason}
              />
            </Form.Group>
            <Form.Group controlId="bookingForm.Doctor">
              <Form.Label>Choose your doctor</Form.Label>
              <Form.Control
                as="select"
                onChange={handleSelectDoctor}
                value={selectedDoctor}
              >
                {doctors.map((doctor, index) => (
                  <option
                    key={index}
                    value={doctor._id}
                  >{`${doctor.firstName} ${doctor.lastName}`}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="bookingForm.Date">
              <Form.Label>
                <strong>Pick a date</strong>
              </Form.Label>
              <Form.Row>
                <Form.Control
                  type="date"
                  min={hanldeDateMin().toISOString().split("T")[0]}
                  value={bookingDate.toISOString().split("T")[0]}
                  onChange={handleDateChange}
                  className="booking-date-input"
                />
              </Form.Row>
            </Form.Group>
            <Form.Group>
              <BookingTimeTable
                doctorId={selectedDoctor}
                bookingsList={bookings}
                date={bookingDate}
                startTime={startTime}
                setStartTime={setStartTime}
              />
            </Form.Group>
            <button className="booking-form-submit-btn" type="submit">
              Book
            </button>
          </Form>
        )}
      </div>
    </div>
  );
};

export default BookingCreateForm;
