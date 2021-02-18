import * as types from "../constants/users.constants";
import faker from "faker";
import api from "../../../src/apiService";
import { toast } from "react-toastify";

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
const userInforUpdate = (
  userId,
  name,
  gender,
  blood,
  passportNum,
  job
) => async (dispatch) => {
  console.log("check user id va name", userId, name, gender);
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
