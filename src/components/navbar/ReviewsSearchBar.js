/**
 * Author: Quyen Vo
 * File name: ReviewsSearchBar.js
 * Last Modified Date: 29/2/2021
 * Purpose: This component is using for Nav Bar of the app, showing review search mode of NavBar
 */
import React from "react";
/**
 *
 * @param {String} clinicName The string representing the name of clinic
 * @param {EventHandler} onSubmit The Event handler to handle submitting the search input
 */
const ReviewsSearchBar = ({ clinicName, onSubmit }) => {
  return (
    <div className="search-box">
      <form onSubmit={onSubmit} className="search-form">
        <div
          id="clinic-name-input-box"
          className="box-with-search-btn"
          onFocus={() => {
            const box = document.getElementById("clinic-name-input-box");
            // to let the box has box shadow effect
            box.classList.add("both-side-shadow-box");
          }}
          onBlur={() => {
            const box = document.getElementById("clinic-name-input-box");
            box.classList.remove("both-side-shadow-box");
          }}
        >
          <div className="search-component">
            <label>Clinic name</label>
            <input
              type="text"
              value={clinicName}
              placeholder="Enter clinic name here"
            />
          </div>
          <button type="submit" className="submit-btn">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewsSearchBar;
