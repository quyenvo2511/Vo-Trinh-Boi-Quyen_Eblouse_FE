/**
 * Author: Quyen Vo
 * File name: ClinicDetailPage.js
 * Last Modified Date: 17/2/2021
 * Purpose: This component is showing all information of a Clinic
 *          It also contains Booking Form, Map (react-leaftlet libary)
 */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import clinicsActions from "../redux/actions/clinics.actions";
import LoadingSpinner from "../components/LoadingSpinner";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import ClinicReview from "../components/clinicDetail/ClinicReview";
import ClinicShowcase from "../components/clinicDetail/ClinicShowcase";
import ClinicInfo from "../components/clinicDetail/ClinicInfo";

import "../style/ClinicDetailPage.css";

const ClinicDetailPage = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const clinicId = params.id;

  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(null);

  const clinic = useSelector((state) => state.clinics.clinic);
  const isLoading = useSelector((state) => state.clinics.isLoading);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(clinicsActions.getClinic(clinicId));
  }, [dispatch]);
  // sectionStyle will styling for each sections of Clinic Detail Page
  const sectionStyle = {
    borderTop: "2px solid #dfe0df",
    padding: "20px 0px",
  };

  const handleInputReviewChange = (e) => {
    setReviewText(e.target.value);
  };
  const handleSubmitReview = (e) => {
    e.preventDefault();
    dispatch(
      clinicsActions.createNewReview(clinicId, user._id, reviewText, rating)
    );
    setReviewText("");
    setRating(null);
  };

  return isLoading ? (
    <LoadingSpinner animation="border" color="success" />
  ) : (
    <div className="wrapper">
      <section style={sectionStyle} className="clinic-showcase">
        {clinic ? <ClinicShowcase clinic={clinic} /> : null}
      </section>
      <section className="clinic-info" style={sectionStyle}>
        {clinic ? <ClinicInfo clinic={clinic} /> : null}
      </section>
      <section className="clinic-reviews" style={sectionStyle}>
        {clinic ? (
          <ClinicReview
            clinic={clinic}
            reviewText={reviewText}
            setReviewText={setReviewText}
            rating={rating}
            setRating={setRating}
            handleInputReviewChange={handleInputReviewChange}
            handleSubmitReview={handleSubmitReview}
          />
        ) : null}
      </section>

      <section className="clinic-map" style={sectionStyle}>
        <h2 style={{ textAlign: "center" }}>Our Location</h2>
        <div id="map-container">
          <MapContainer
            // center([longtitude, latitude])
            center={[10.780060498405208, 106.69902603952619]}
            zoom={25}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[10.780060498405208, 106.69902603952619]}>
              <Popup>
                <span style={{ fontWeight: "bold", fontSize: "1.5em" }}>
                  {clinic ? clinic.name : "Clinic Name"}
                </span>
                <br />
                <p>{clinic ? clinic.address : "Clinic Address"}</p>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </section>
    </div>
  );
};

export default ClinicDetailPage;
