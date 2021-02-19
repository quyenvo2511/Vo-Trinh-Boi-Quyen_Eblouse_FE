/**
 * Author: Quyen Vo
 * File name: FullNavBar.js
 * Last Modified Date: 15/2/2021
 * Purpose:   This component is used to display full search bar
 *            It contains search form, number of people, date
 */
import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import UserInfoButton from "./UserInfoButton";
import ReviewsSearchBar from "./ReviewsSearchBar";
import BookingSearchBar from "./BookingSearchBar";
import { useHistory } from "react-router-dom";

/**
 * The Nav Bar with full functionalities (search Clinic)
 *
 * @param {Object} user The Object containing all data of current user from server side
 * @param {Boolean} isLoading The Boolean that checks whenever data in, data out
 * @param {Number} scrollOffsetY The number that check if it > 0, it means user is scrolling
 * @param {Image} logo The Image logo of brand
 * @param {String} specQuery The String representing the specialization that the user uses to search for clinics
 * @param {Function} setSpecQuery The Function to change the value of specQuery
 * @param {Function} setShowFullClicked The Function to change the status of nav bar
 * @param {EventHandler} handleShowModal The Event handler to handle showing of modal Log in when user click on Login text on NavBar
 * @param {EventHandler} onSubmit The Event handler to handle submitting the search input
 * @param {Array} specializations The Array containing all available specializations in the app.
 */
const FullNavBar = ({
  user,
  isLoading,
  scrollOffsetY,
  logo,
  specQuery,
  setSpecQuery,
  setShowFullClicked,
  handleShowModal,
  onSubmit,
  specializations,
}) => {
  // This component is in PublicNavBar from components/navbar/PublicNavBar.js

  const BOOKING_SEARCH_MODE = 1; // ..= 1 means always show first when user reload or access the website
  const REVIEWS_SEARCH_MODE = 2;
  const [searchMode, setSearchMode] = useState(BOOKING_SEARCH_MODE);

  const history = useHistory();
  const handleLogo = () => {
    history.push("/");
  };

  return (
    <>
      {/* Left side of Nav bar*/}
      <div className="nav-bar">
        <div id="logo" onClick={handleLogo}>
          <img src={logo} alt="Eblouse" width="150px" />
        </div>
        {/* Center of Nav bar*/}
        <div className="nav-middle">
          <div className="change-modes-btn">
            <button
              className="nav-btn"
              onClick={() => setSearchMode(BOOKING_SEARCH_MODE)}
            >
              Book an appointment
            </button>
            <button
              className="nav-btn"
              onClick={() => {
                setSearchMode(REVIEWS_SEARCH_MODE);
              }}
            >
              See reviews
            </button>
            {scrollOffsetY > 0 ? (
              <button
                className="nav-btn"
                onClick={() => {
                  setShowFullClicked(false);
                }}
              >
                Show Less
              </button>
            ) : null}
          </div>
          {searchMode === BOOKING_SEARCH_MODE ? (
            <BookingSearchBar
              specQuery={specQuery}
              setSpecQuery={setSpecQuery}
              onSubmit={onSubmit}
              specializations={specializations}
            />
          ) : (
            <ReviewsSearchBar />
          )}
        </div>
        {/* Right side of Nav bar */}
        <div className="nav-links">
          <Nav.Link href="/">Home Page</Nav.Link>
          {isLoading ? (
            <Nav.Link>Loading</Nav.Link>
          ) : user == null ? (
            <Nav.Link onClick={handleShowModal}>Login</Nav.Link>
          ) : (
            <UserInfoButton user={user} />
          )}
        </div>
      </div>
    </>
  );
};

export default FullNavBar;
