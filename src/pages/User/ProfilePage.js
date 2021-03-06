/**
 * Author: Quyen Vo
 * File name: ProfilePage.js
 * Last Modified Date: 20/1/2021
 * Purpose: This component is using for change information of user
 */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookingUser from "./contentUser/BookingUser";
import MedicalReport from "./contentUser/MedicalReport";
import UserMenu from "../User/UserMenu";
import { Container, Row, Col } from "react-bootstrap";
import usersAction from "../../redux/actions/users.actions";
import bookingsActions from "../../redux/actions/bookings.actions";
import LoadingSpinner from "../../components/LoadingSpinner";

import "../../style/UserProfilePage.css";
import { toast } from "react-toastify";

export const SHOW_BOOKING_USER = 1;
export const SHOW_MEDICAL_REPORT = 2;

const ProfilePage = () => {
  const [showMode, setShowMode] = useState(SHOW_MEDICAL_REPORT);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [blood, setBlood] = useState("");
  const [job, setJob] = useState("");
  const [passportNum, setPassportNum] = useState("");

  const bookings = useSelector((state) => state.bookings.bookings);
  const isLoading = useSelector((state) => state.bookings.isLoading);
  const user = useSelector((state) => state.auth.user);
  const listClinic = useSelector((state) => state.clinics.listClinic);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookingsActions.getBookingsList(user._id));
  }, [dispatch]);

  const handleSubmitMedical = (e) => {
    e.preventDefault();
    dispatch(
      usersAction.userInforUpdate(
        user._id,
        name,
        gender,
        blood,
        passportNum,
        job
      )
    );
    // toast.success("Your Profile was updated!");
  };

  return (
    <Container fluid className="user-profile-page-layout">
      {isLoading ? (
        <LoadingSpinner animation="border" color="danger" />
      ) : (
        <Row>
          <Col md={1}></Col>
          <Col md={2}>
            <div className="user-page-wrapper">
              <UserMenu showMode={showMode} setShowMode={setShowMode} />
            </div>
          </Col>
          <Col md={8}>
            <div className="content-wrapper">
              {showMode === SHOW_BOOKING_USER ? (
                <BookingUser bookings={bookings} user={user} />
              ) : (
                <MedicalReport
                  bookings={bookings}
                  listClinic={listClinic}
                  name={name}
                  setName={setName}
                  gender={gender}
                  setGender={setGender}
                  blood={blood}
                  setBlood={setBlood}
                  job={job}
                  setJob={setJob}
                  passportNum={passportNum}
                  setPassportNum={setPassportNum}
                  handleSubmitMedical={handleSubmitMedical}
                />
              )}
            </div>
          </Col>
          <Col md={1}></Col>
        </Row>
      )}
    </Container>
  );
};

export default ProfilePage;
