import React from "react";
import { SHOW_BOOKING_USER, SHOW_MEDICAL_REPORT } from "./ProfilePage";

const UserMenu = ({ showMode, setShowMode }) => {
  return (
    <div className="menu-side-user">
      <div
        className={
          showMode === SHOW_MEDICAL_REPORT
            ? "menu-side-item selected-tab"
            : "menu-side-item"
        }
        onClick={() => setShowMode(SHOW_MEDICAL_REPORT)}
      >
        Your Medical Report
      </div>
      <div
        className={
          showMode === SHOW_BOOKING_USER
            ? "menu-side-item selected-tab"
            : "menu-side-item"
        }
        onClick={() => setShowMode(SHOW_BOOKING_USER)}
      >
        Your Booking history
      </div>
    </div>
  );
};

export default UserMenu;
