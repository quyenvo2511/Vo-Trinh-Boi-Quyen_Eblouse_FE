/**
 * Author: Quyen Vo
 * File name: PartialNavBar.js
 * Last Modified Date: 15/2/2021
 */
import React from "react";
import { Nav } from "react-bootstrap";
import UserInfoButton from "./UserInfoButton";

/**
 *
 * @param {Image} logo The Image of brand
 * @param {Boolean} isloading The Boolean that checks whenever data in, data out
 * @param {Object} user The Object containing all data of current user from server side
 * @param {Function} setShowFullClicked The Function to change the status of nav bar
 * @param {EventHandler} handleShowModal The Event Handler to display the modal of Log in
 */
const PartialNavBar = ({
  logo,
  isLoading,
  user,
  setShowFullClicked,
  handleShowModal,
}) => {
  // this component is in PublicNavbar from components/navbar/PublicNavBar.js
  return (
    <>
      <div className="nav-bar">
        <div id="logo">
          <img src={logo} alt="Eblouse" width="150px" />
        </div>
        <div className="nav-middle">
          <div
            onClick={() => {
              setShowFullClicked(true);
            }}
            className="show-full-nav-btn"
          >
            <p>Start your search</p>
            <div className="search-btn-show-full">
              <i className="fas fa-search"></i>
            </div>
          </div>
        </div>
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

export default PartialNavBar;
