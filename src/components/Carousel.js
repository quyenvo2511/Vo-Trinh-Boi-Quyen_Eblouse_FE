/**
 * Author: npm libary - react-carousel
 * File name: Carousel.js
 * Last Modified Date: 17/2/2021
 * Purpose: This component contains images, information and user can see information by click arrow next/back to see list of infoation
 */
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../style/MultiItemsCarousel.css";
/**
 *
 * @param {Array} items The Array of children compoenent to be displayed in the carousel
 * @param {Number} slideNum the Number of slide will be displayed at one time in UI
 * @param {Number} offset The Distance between slides
 */
export const MultiItemsCarousel = ({ items, slidesNum, offset }) => {
  return (
    <div className="carousel-wrapper">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={true}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={true}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: slidesNum,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: slidesNum,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: slidesNum,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {items}
      </Carousel>
    </div>
  );
};
