/**
 * Author: Quyen Vo
 * File name: UserInfoButton.js
 * Last Modified Date: 29/2/2021
 * Purpose: This component is used to change status of Login text => avatar of User
 */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import authActions from "../../redux/actions/auth.actions";

import avatar_placeholder from "../../images/avatar_placeholder.png";

/**
 *
 * @param {Object} user The Object containing all data of current user from server side
 */
const UserInfoButton = ({ user }) => {
  const [showActionMenu, setShowActionMenu] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    setShowActionMenu(false);
    dispatch(authActions.logout());
    history.push("/");
  };

  const handleOpenAccountSetting = () => {
    if (user.isAdmin === true) {
      history.push("/admin");
    }
  };
  const handleOpenMedicalReport = () => {
    if (user.isAdmin === false) {
      history.push(`/information/${user._id}`);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <button
        className="user-info-button"
        onClick={() => setShowActionMenu(!showActionMenu)}
      >
        <i
          className="fas fa-bars"
          style={{ marginRight: 10, fontSize: "1.1em" }}
        ></i>
        <img
          className="user-avatar"
          src={user.avatarUrl ? user.avatarUrl : avatar_placeholder}
          alt="user avatar"
        />
      </button>
      {showActionMenu && user.isAdmin ? (
        <div className="user-action-menu">
          <div className="action-item" onClick={handleOpenAccountSetting}>
            <i className="fas fa-user" style={{ marginRight: 15 }}></i>
            <p style={{ display: "inline" }}>
              <strong>Account setting</strong>
            </p>
          </div>
          <div className="action-item" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt" style={{ marginRight: 15 }}></i>
            <p style={{ display: "inline" }}>Log out</p>
          </div>
        </div>
      ) : showActionMenu ? (
        <div className="user-action-menu">
          <div className="action-item" onClick={handleOpenMedicalReport}>
            <i className="fas fa-user" style={{ marginRight: 15 }}></i>
            <p style={{ display: "inline" }}>
              <strong>Your Medical Report</strong>
            </p>
          </div>
          <div className="action-item" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt" style={{ marginRight: 15 }}></i>
            <p style={{ display: "inline" }}>Log out</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UserInfoButton;
