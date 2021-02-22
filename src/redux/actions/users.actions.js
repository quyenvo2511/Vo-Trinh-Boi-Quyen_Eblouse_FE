/**
 * Author: Quyen Vo
 * File name: usersActions.js
 * Last Modified Date: 15/2/2021
 */
import * as types from "../constants/users.constants";
import faker from "faker";
import api from "../../../src/apiService";
import { toast } from "react-toastify";
/**
 * This action allows user to login
 */
const userLogin = () => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST, payload: null });
  try {
    const user = {};
    user.firstName = faker.name.firstName();
    user.lastName = faker.name.lastName();
    user.email = "abc@gmail.com";

    await new Promise((resolve, reject) => {
      setTimeout(resolve, 1000);
    });

    dispatch({ type: types.LOGIN_SUCCESS, payload: { user: user } });
  } catch (error) {
    dispatch({ type: types.LOGIN_FAILURE, payload: null });
  }
};
/**
 *
 * @param {String} userId The String representing for ID of user
 * @param {String} name The String representing for name of user
 * @param {String} gender The String representing for gender of user
 * @param {String} blood The String representing for blood of user
 * @param {String} passportNum The String for number of passport or Nationality ID Card Number of user
 * @param {String} job The String representing for job place of user
 */
const userInforUpdate = (
  userId,
  name,
  gender,
  blood,
  passportNum,
  job
) => async (dispatch) => {
  console.log("check user id va name", userId, name);
  dispatch({ type: types.EDIT_PROFILE_REQUEST, payload: null });
  try {
    const res = await api.put(`users/information/${userId}`, {
      name,
      gender,
      blood,
      passportNum,
      job,
    });
    dispatch({ type: types.EDIT_PROFILE_SUCCESS, payload: res.data.data });
    toast.success("information has been updated");
  } catch (error) {
    dispatch({ type: types.EDIT_PROFILE_FAILURE, payload: null });
  }
};
const usersAction = {
  userLogin,
  userInforUpdate,
};

export default usersAction;
