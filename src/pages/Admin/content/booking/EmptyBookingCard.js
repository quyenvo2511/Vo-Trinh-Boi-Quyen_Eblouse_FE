/**
 * Author: Quyen Vo
 * File name: EmptyBookingCard.js
 * Last Modified Date: 31/1/2021
 * Purpose: This component is showing content text
 */
import React from "react";
/**
 *
 * @param {String} content The string representing the text which will display whenever other components have no bookings
 * general content = "There are no completed/approved/cancelled/pending appointments at the moment"
 */
const EmptyBookingCard = ({ content }) => {
  return <div className="empty-booking-card">{content}</div>;
};

export default EmptyBookingCard;
