/**
 * Author: Quyen Vo
 * File name: PublicNavBar.js
 * Last Modified Date: 15/2/2021
 * Purpose: This component is using for Nav Bar of the app
 */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import FullNavBar from "./FullNavBar";
import PartialNavBar from "./PartialNavBar";
import LoginForm from "./LoginForm";

import logo from "../../images/ebloue-logo.png";
import "../../style/PublicNavBar.css";
/**
 *
 * @param {Array} specializations The Array containing all available specializations in the app.
 */
const PublicNavBar = ({ specializations }) => {
  const [specQuery, setSpecQuery] = useState("");
  const [showFullClicked, setShowFullClicked] = useState(false);
  const [scrollOffsetY, setScrollOffsetY] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const history = useHistory();
  const user = useSelector((state) => state.auth.user);
  const isLoading = useSelector((state) => state.auth.loading);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollOffsetY(position);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  const handleSearchSpec = () => {
    // whenever user click on the search button
    //redirect them to the SearchListpage
    history.push(`/search/${encodeURIComponent(specQuery)}`);
    // encodeURIComponent will translate the query string with special characters
    // into valid URI form
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // return a function that will remove the Event Scroll when user stop scroll (optimize the code)
  }, []);

  return (
    <div
      className={
        scrollOffsetY > 0 ? "nav-wrapper-full nav-scrolled" : "nav-wrapper-full"
      }
    >
      {scrollOffsetY > 0 && !showFullClicked ? (
        <PartialNavBar
          user={user}
          isLoading={isLoading}
          logo={logo}
          setShowFullClicked={setShowFullClicked}
          handleShowModal={handleShowModal}
        />
      ) : (
        <FullNavBar
          user={user}
          isLoading={isLoading}
          scrollOffsetY={scrollOffsetY}
          logo={logo}
          specQuery={specQuery}
          setSpecQuery={setSpecQuery}
          setShowFullClicked={setShowFullClicked}
          handleShowModal={handleShowModal}
          onSubmit={handleSearchSpec}
          specializations={specializations}
        />
      )}

      <LoginForm
        showModal={showModal}
        handleHideModal={handleHideModal}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default PublicNavBar;
