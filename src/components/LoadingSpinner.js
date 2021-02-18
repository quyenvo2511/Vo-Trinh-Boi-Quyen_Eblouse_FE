/**
 * Author: Quyen Vo
 * File name: Card.js
 * Last Modified Date: 30/1/2021
 * Purpose: This component is showing loading circle
 */
import React from "react";
import { Spinner } from "react-bootstrap";
// this component is using for everytime user refresh, loading data
const LoadingSpinner = ({ animation, color }) => {
  const spinnerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div className="spinner-wrapper" style={spinnerStyle}>
      <Spinner animation={animation} variant={color} />
    </div>
  );
};

export default LoadingSpinner;
