/**
 * Author: Quyen Vo
 * File name: Review.js
 * Last Modified Date: 30/1/2021
 * Purpose: This component is showing information of clinic
 */
import React from "react";
/**
 *
 * @param {String} avatar The image
 * @param {String} clinicName The String representing the name of Clinic
 * @param {String} address The String representing the address of Clinic
 * @param {String} description The String representing the description of Clinic
 * @param {String} comment The String representing the comment of Clinic
 * @param {Number} rating The Number representing the star (1-5) of Clinic
 * @param {EventHandler} onClick The Event Handler to show information of a review ( user, content of reviews)
 */
const ReviewCard = ({
  avatar,
  clinicName,
  address,
  description,
  comment,
  rating,
  onClick,
}) => {
  // This component is in Homepage from Pages/Homepage.js and components/clinicDetail/ClinicReview.js
  const infoStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };
  return (
    <div className="home-page-review-card" onClick={onClick}>
      <div style={infoStyle}>
        <div>
          <img
            className="clinic-avatar"
            style={{ borderRadius: "50%", width: "60px", height: "60px" }}
            src={avatar}
            alt="clinic avatar"
          />
        </div>
        <div style={{ paddingLeft: 20 }}>
          <h4 className="clinic-name-review-card">{clinicName}</h4>
          <p className="clinic-address-review-card">{address}</p>
          <p className="clinic-description-review-card">{description}</p>
        </div>
      </div>
      <div className="horizontal-divider-review-card"></div>
      <p style={{ padding: "10px 0px" }}>
        <i style={{ color: "#fdb827" }} className="fas fa-star"></i>
        {" " + rating}
      </p>
      <p style={{ margin: 0 }}>
        {/* check if the content of comment is too long, it will display first fifty characters and "..."  */}
        "{comment.length > 50 ? comment.slice(0, 50) + "..." : comment}"
      </p>
    </div>
  );
};

export default ReviewCard;
