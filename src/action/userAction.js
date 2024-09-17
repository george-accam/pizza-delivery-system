import axios from "axios";
const baseurl = process.env.REACT_APP_SERVER_URL;

export const userRegisterAction = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });
  try {
    const response = await axios.post(baseurl + "/api/user/register", user);
    console.log(response);
    dispatch({ type: "USER_REGISTER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAILED" });
  }
};

export const userLoginAction = (user) => async (dispatch) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });
  try {
    const userdata = await axios.post(baseurl + "/api/user/login", user);
    //console.log(userdata.data);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: userdata.data });
    localStorage.setItem("user", JSON.stringify(userdata.data));
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAILED", payload: error });
    //alert("Login failed"); -- for checking
  }
};

export const userLogoutAction = () => (dispatch) => {
  dispatch({ type: "USER_LOGOUT" });
};

export const allUserAction = () => async (dispatch) => {
  dispatch({ type: "ALL_USER_REQUEST" });
  try {
    const response = await axios.get(baseurl + "/api/user/alluser");
    dispatch({ type: "ALL_USER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "ALL_USER_FAILED" });
  }
};

export const deleteUserAction = (user) => async (dispatch) => {
  dispatch({ type: "DELETE_USER_REQUEST" });
  try {
    const response = await axios.post(baseurl + "/api/user/delete", user);
    alert("Deleted successfully! Please refresh the page");
    dispatch({ type: "DELETE_USER_SUCCESS" });
  } catch (error) {
    dispatch({ tyoe: "DELETE_USER_FAILED" });
  }
};
