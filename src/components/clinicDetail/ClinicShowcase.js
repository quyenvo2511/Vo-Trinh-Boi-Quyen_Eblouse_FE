/**
 * Author: Quyen Vo
 * File name: ClinicShowCase.js
 * Last Modified Date: 15/2/2021
 * Purpose: This component is used to display basic information of Clinic in first section UI of Clinic detail page
 */
import React, { useState } from "react";

/**
 * ClinicShowCase display name, address, average rating, total of reviews,... of Clinic
 *
 * @param {Object} clinic The Object containing all data information of Clinic
 */

const ClinicShowcase = ({ clinic }) => {
  // This component is in ClinicDetailPage from pages/ClinicDetailPage.js
  const { name, specializations, address, avgRating, reviews, images } = clinic;

  const [selectedImage, setSelectedImage] = useState(0);
  // the image that selected will be showed on UI as the bigest image (UI)

  return (
    <div className="showcase-wrapper">
      <div className="clinic-basic-info">
        <div className="name-address">
          <h2 className="clinic-name">{name}</h2>
          <div className="divider"></div>
          <p className="clinic-address">{address}</p>
        </div>
        <div className="rating-specialization">
          <p className="rating">
            <i style={{ color: "#fdb827" }} className="fas fa-star"></i>
            {`   ${Math.round(avgRating * 10) / 10} (${reviews.length})`}
          </p>
          <ul className="specialization">
            {specializations.map((spec, index) => (
              <li key={index}>{spec.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="clinic-images">
        <div className="main-image">
          <img src={images[selectedImage]} alt="clinic" />
        </div>
        <div className="image-grid">
          {images.map((image, index) => (
            <div
              className="showcase-image-wrapper"
              key={index}
              onClick={() => setSelectedImage(index)}
            >
              <img src={image} alt="more-clinic" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClinicShowcase;
