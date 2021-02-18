/**
 * Author: Quyen Vo
 * File name: Card.js
 * Last Modified Date: 30/1/2021
 * Purpose: This component is showing information of clinic
 */
import React from "react";
import { useHistory } from "react-router-dom";
import BRcarousel from "../components/BRcarousel";
import "../style/SearchListPage.css";
/**
 *
 * @param {Object} clinic The Object containing all information data of a clinic from server side
 */
const Card = ({ clinic }) => {
  // This component is in SearchListPage
  const history = useHistory();
  const hanleClickCard = () => {
    history.push(`/clinic/${clinic._id}`);
  };
  return (
    <div className="wrap-card" onClick={hanleClickCard}>
      <div className="all">
        <div className="carousel">
          <BRcarousel images={clinic.images} />
        </div>
        <div className="information">
          <h3>{clinic.name}</h3>
          <h4 className="text-address">{clinic.address}</h4>
          <ul className="list-service d-flex">
            {clinic.services.map((service) => (
              <li>{service.name}</li>
            ))}
          </ul>
          <i
            class="fa fa-star position-end"
            style={{ color: "red" }}
            aria-hidden="true"
          >
            <span>{Math.round(clinic.avgRating * 10) / 10}</span>
          </i>
          <i class="fa fa-heart position-right" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
