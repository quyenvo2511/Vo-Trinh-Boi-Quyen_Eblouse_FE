/**
 * Author: Quyen Vo
 * File name: ClinicInfo.js
 * Last Modified Date: 15/2/2021
 * Purpose:   This component is used to display the card that contains information of Clinic
 */

import React from "react";
import BookingCreateForm from "../../pages/Clinic/BookingCreateForm";
import { MultiItemsCarousel } from "../../components/Carousel";
/**
 * ClinicInfo component is used to display the basic information of a clinic
 * This component is in ClinicDetailPage (pages/ClinicDetailPage.js)
 *
 * @param {Object} clinic The Object containing all data from server of a Clinic
 */

const ClinicInfo = ({ clinic }) => {
  const {
    name,
    doctors,
    statement,
    services,
    registerNumber,
    languages,
  } = clinic;

  /**
   * CertificatedDisplayCard is used to display the icon, content & title for some basic information of Clinic
   */
  const CertificateDisplayCard = ({ title, content, icon }) => {
    const iconStyle = {
      padding: "0px 20px",
      fontSize: "2.5em",
    };

    const headerStyle = {
      margin: 0,
      padding: "5px 10px",
      fontSize: "0.8em",
      fontWeight: "bold",
    };

    const contentStyle = {
      margin: 0,
      padding: "5px 10px",
      fontSize: "0.8em",
      fontStyle: "italic",
    };

    return (
      <div className="certificates-display">
        <div style={iconStyle}>{icon}</div>
        <div>
          <h5 style={headerStyle}>{title}</h5>
          <p style={contentStyle}>{content}</p>
        </div>
      </div>
    );
  };
  /**
   * DoctorInfoCard is used to display information of a Doctor who works for a Clinic.
   *
   * @param {object} doctor The object containing all the data of Doctor from server
   */
  const DoctorInfoCard = ({ doctor }) => {
    const {
      firstName,
      lastName,
      specialization,
      avatarUrl,
      gender,
      status,
    } = doctor;
    return (
      <div
        className="doctor-info-card"
        style={{ width: "400px", background: "white" }}
      >
        <div className="avatar-wrapper">
          <img
            src={avatarUrl}
            alt="doctor avatar"
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
          />
        </div>
        <div className="doctor-info">
          <p
            style={{ fontSize: "1.1em", fontWeight: "bold", paddingBottom: 5 }}
          >{`Dr. ${firstName} ${lastName}`}</p>
          <p
            style={{
              fontSize: "0.8em",
              fontStyle: "italic",
              color: "grey",
            }}
          >
            {specialization.map((spec, index) => (
              <span key={index}>{`${spec.name}   `}</span>
            ))}
          </p>
          <p
            style={{
              fontSize: "0.8em",
              fontStyle: "italic",
              fontWeight: "lighter",
              paddingBottom: "5px",
            }}
          >
            {gender}
          </p>
          <p
            style={{
              fontSize: "1em",
              fontWeight: "bold",
              paddingBottom: 5,
            }}
          >
            Working Status:
          </p>
          <p style={{ fontSize: "0.8em" }}>
            <span style={{ color: "grey" }}>{status}</span>
          </p>
        </div>
      </div>
    );
  };
  // This function below is mapping the information data of Doctors into cards to display info
  const getDoctorInfoCardList = () => {
    return doctors.map((doctor, index) => (
      <DoctorInfoCard key={index} doctor={doctor} />
    ));
  };
  // This return below is belong to ClinicInfo component
  return (
    <div className="info-wrapper">
      <div className="meta">
        <div className="statement" style={{ padding: "0px 20px" }}>
          <h4 style={{ margin: 0 }}>{name}</h4>
          <p>{statement}</p>
        </div>
        <div className="certificates">
          <CertificateDisplayCard
            title="Vietnam National Health Insurance"
            content="Accepted"
            icon={<i className="fas fa-file-medical"></i>}
          />
          <CertificateDisplayCard
            title="Languages"
            content={languages.join(", ")}
            icon={<i className="fas fa-language"></i>}
          />
          <CertificateDisplayCard
            title="Board Certification"
            content=""
            icon={<i className="fas fa-award"></i>}
          />
          <CertificateDisplayCard
            title="Register Number"
            content={registerNumber}
            icon={<i className="far fa-address-card"></i>}
          />
        </div>
        <div className="services">
          <h4>Medical Services</h4>
          <ul className="service-list">
            {services.map((service) => (
              <li key={service}>
                <i
                  className="fas fa-check"
                  style={{ marginRight: "0.5em" }}
                ></i>{" "}
                {"    " + service.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="doctors-list">
          <h4>Doctors</h4>
          <MultiItemsCarousel
            items={getDoctorInfoCardList()}
            slidesNum={1}
            offset={0}
          />
        </div>
      </div>
      <BookingCreateForm doctors={doctors} clinicId={clinic._id} />
    </div>
  );
};

export default ClinicInfo;
