/**
 * Author: Quyen Vo
 * File name: bookingsActions.js
 * Last Modified Date: 15/2/2021
 */
import * as types from "../constants/bookings.constants";
import api from "../../apiService";
import { toast } from "react-toastify";
/**
 * This component will get list of Bookings from server side
 * @param {String} userId The String representing for the ID of user who is loging in the app
 */
const getBookingsList = (userId) => async (dispatch) => {
  dispatch({ type: types.GET_BOOKINGS_LIST_REQUEST, payload: null });
  try {
    const res = await api.get(`/bookings/${userId}`);
    const bookingsList = res.data.data;
    dispatch({ type: types.GET_BOOKINGS_LIST_SUCCESS, payload: bookingsList });
  } catch (error) {
    dispatch({ type: types.GET_BOOKINGS_LIST_FAILURE, payload: null });
  }
};
/**
 * Allowing Admin accepts booking request
 * @param {String} userId
 * @param {String} bookingId
 */
const acceptBookingRequest = (userId, bookingId) => async (dispatch) => {
  dispatch({ type: types.ACCEPT_BOOKING_REQUEST, payload: null });
  try {
    await api.put(`/bookings/${bookingId}`);
    const res = await api.get(`/bookings/${userId}`);
    const bookingsList = res.data.data;

    dispatch({ type: types.ACCEPT_BOOKING_SUCCESS, payload: bookingsList });
    toast.success("Appoinment accepted!");
  } catch (error) {
    dispatch({ type: types.ACCEPT_BOOKING_FAILURE, payload: null });
    toast.error("Failed to accept appointment...");
  }
};
/**
 * This action to cancel a booking
 * @param {String} userId
 * @param {String} bookingId
 */
const cancelBookingRequest = (userId, bookingId) => async (dispatch) => {
  dispatch({ type: types.CANCEL_BOOKING_REQUEST, payload: null });
  try {
    await api.post(`/bookings/manage/${bookingId}`);
    const res = await api.get(`/bookings/${userId}`);
    const bookingsList = res.data.data;

    dispatch({ type: types.CANCEL_BOOKING_SUCCESS, payload: bookingsList });
    toast.success("Appoinment cancelled!");
  } catch (error) {
    dispatch({ type: types.CANCEL_BOOKING_FAILURE, payload: null });
    toast.error("Failed to cancel appointment...");
  }
};
/**
 * This action allow to create a new Booking
 * @param {Object} bookingInfo The Object containing information data
 * @param {String} accessToken
 */
const createBookingRequest = (bookingInfo, accessToken) => async (dispatch) => {
  const { clinicId, doctor, startTime, endTime, reason } = bookingInfo;
  dispatch({ type: types.CREATE_BOOKING_REQUEST, payload: null });
  if (accessToken) {
    const bearerToken = "Bearer " + accessToken;
    api.defaults.headers.common["authorization"] = bearerToken;
  }
  try {
    await api.post(`/bookings/${clinicId}`, {
      doctor,
      startTime,
      endTime,
      reason,
    });
    const res = await api.get(`/bookings/${clinicId}`);
    const bookings = res.data.data;
    dispatch({ type: types.CREATE_BOOKING_SUCCESS, payload: bookings });
    toast.success("Appointment created for you!");
  } catch (error) {
    dispatch({ type: types.CREATE_BOOKING_FAILURE, payload: null });
    toast.error("You need to Log in first!");
  }
};

const bookingsActions = {
  getBookingsList,
  acceptBookingRequest,
  cancelBookingRequest,
  createBookingRequest,
};

export default bookingsActions;
