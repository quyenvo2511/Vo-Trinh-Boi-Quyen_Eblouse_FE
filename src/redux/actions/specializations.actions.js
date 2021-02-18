/**
 * Author: Quyen Vo
 * File name: bookingsActions.js
 * Last Modified Date: 15/2/2021
 */
import * as types from "../constants/specializations.constants";
import api from "../../apiService";
/**
 * This action will get specializations to allow user searching with optional query
 */
const getAllSpecializations = () => async (dispatch) => {
  dispatch({ type: types.GET_SPECIALIZATIONS_REQUEST, payload: null });
  try {
    const res = await api.get(`clinic/specs`);
    console.log("SPECS", res.data.data);

    dispatch({
      type: types.GET_SPECIALIZATIONS_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({ type: types.GET_SPECIALIZATIONS_FAILURE, payload: null });
  }
};

const specsActions = {
  getAllSpecializations,
};

export default specsActions;
