/**
 * Author: Quyen Vo
 * File name: UserMenu.js
 * Last Modified Date: 20/1/2021
 * Purpose: This component display UI and show mode
 */
import React from "react";
import { SHOW_BOOKING_USER, SHOW_MEDICAL_REPORT } from "./ProfilePage";
/**
 *
 * @param {Boolean} showMode The Boolean that will show Booking-user tab or Medical report tab
 * @param {Function} setShowMode The Function to change mode above
 */
const UserMenu = ({ showMode, setShowMode }) => {
  return (
    <div className="menu-side-user">
      <div
        className={
          showMode === SHOW_MEDICAL_REPORT
            ? "admin-menu-item selected-admin-mode"
            : "admin-menu-item"
        }
        onClick={() => setShowMode(SHOW_MEDICAL_REPORT)}
      >
        Your Medical Report
      </div>
      <div
        className={
          showMode === SHOW_BOOKING_USER
            ? "admin-menu-item selected-admin-mode"
            : "admin-menu-item"
        }
        onClick={() => setShowMode(SHOW_BOOKING_USER)}
      >
        Your Booking history
      </div>
    </div>
  );
};

export default UserMenu;
