/**
 * Author: QuyenVo
 * File name: Footer.js
 * Last Modified Date: 30/1/2021
 * Purpose: This component is showing UI of the footer of app
 */
import React from "react";
import "../style/Footer.css";
import appstore from "../images/appstore.svg";
// This component is in PublicLayout from routes/PublicLayout.js
const Footer = () => {
  return (
    <>
      <footer className="last-thing">
        <div className="container4">
          <div id="box-footer">
            <div className="box-one">
              <ul>
                <li className="list-name list-4">Eblouse</li>
                <li className="list-3">
                  <a href="1">Home</a>
                </li>
                <li className="list-3">
                  <a href="2">About us</a>
                </li>
                <li className="list-3">
                  <a href="3">Press</a>
                </li>
                <li className="list-3">
                  <a href="4">Cares</a>
                </li>
                <li className="list-3">
                  <a href="5">Contact us</a>
                </li>
                <li className="list-3">
                  <a href="6">Help</a>
                </li>
              </ul>
            </div>
            <div className="box-two">
              <ul>
                <li className="list-name list-4">Specialities</li>
                <li className="list-4">
                  <a className="no1" href="6">
                    Primary Care Doctor
                  </a>
                </li>
                <li className="list-4">
                  <a href="6">Dermatologist</a>
                </li>
                <li className="list-4">
                  <a href="7">OB-GYN</a>
                </li>
                <li className="list-4">
                  <a href="8">Dentist</a>
                </li>
                <li className="list-4">
                  <a href="9">Ear, Nose & Throat Doctor</a>
                </li>
                <li className="list-4">
                  <a href="10">Cardiologist</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="app-store">
            <div id="img-app">
              <img className="app" src={appstore} alt="logo-appstore" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
