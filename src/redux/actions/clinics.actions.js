/**
 * Author: Quyen Vo
 * File name: bookingsActions.js
 * Last Modified Date: 15/2/2021
 */
import api from "../../apiService";
import * as types from "../constants/clinics.constants";
import { toast } from "react-toastify";
/**
 * This Action to get single clinic
 * @param {String} clinicId This String representing for ID of a clinic
 */
const getClinic = (clinicId) => async (dispatch) => {
  dispatch({ type: types.GET_CLINIC_REQUEST, payload: null });
  try {
    const response = await api.get(`/clinic/${clinicId}`);
    const clinic = response.data.data;
    console.log(clinic);
    dispatch({ type: types.GET_CLINIC_SUCCESS, payload: clinic });
  } catch (error) {
    dispatch({ type: types.GET_CLINIC_FAILURE, payload: null });
    toast.error(error);
  }
};
/**
 * This Action to search clinic list follow to query
 * @param {String} query The String representing for input to search
 */
const getSearchCategory = (query = null) => async (dispatch) => {
  dispatch({ type: types.CLINIC_REQUEST, payload: null });
  try {
    let queryString = "";
    if (query) {
      queryString = `specialization=${encodeURIComponent(query)}`;
    }

    const res = await api.get(`clinic/search?${queryString}`);

    dispatch({ type: types.CLINIC_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.CLINIC_FAILURE, payload: error });
  }
};
/**
 * This Action to get list of clinic
 */
const getAllClinic = () => async (dispatch) => {
  dispatch({ type: types.GET_ALL_CLINICS_REQUEST, payload: null });
  try {
    const res = await api.get(`/clinic/`);
    dispatch({
      type: types.GET_ALL_CLINICS_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({ type: types.GET_ALL_CLINICS_FAILURE, payload: null });
    toast.error(error);
  }
};
/**
 * This Action to create a new review
 * @param {String} clinicId
 * @param {String} userId
 * @param {String} reviewText The String representing for input of review
 * @param {Number} rating The Number representing for star the user will give for clinic
 */
const createNewReview = (clinicId, userId, reviewText, rating) => async (
  dispatch
) => {
  dispatch({ type: types.CREATE_REVIEW_REQUEST, payload: null });
  try {
    const res = await api.post(`/review/clinic/${clinicId}`, {
      userId: userId,
      content: reviewText,
      rating: rating,
    });
    console.log("chek review", res.data.data);
    dispatch({ type: types.CREATE_REVIEW_SUCCESS, payload: res.data.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: types.CREATE_REVIEW_FAILURE, payload: error });
  }
};
const clinicsActions = {
  getClinic,
  getAllClinic,
  getSearchCategory,
  createNewReview,
};
export default clinicsActions;
