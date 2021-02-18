/**
 * Author: Boostrap
 * File name: BRcarousel.js
 * Last Modified Date: 30/1/2021
 * Purpose: This component contains images and user can see images by click arrow next/back to see list of images
 */
import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const BRCarousel = ({ images }) => {
  //This component is in SearchListpage from pages/SearchListPage.js
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="change-size" onSelect={handleSelect}>
      {images.map((image) => (
        <Carousel.Item>
          <img
            src={image}
            className="d-block w-100"
            style={{ borderRadius: "15px" }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default BRCarousel;
