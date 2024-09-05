import axios from "axios";

export const deliveryPartnerRegisterAction =
  (deliverypartner) => async (dispatch) => {
    dispatch({ type: "DELIVERY_PARTNER_REGISTER_REQUEST" });
    try {
      const response = await axios.post(
        "/api/deliverypartner/register",
        deliverypartner
      );
      dispatch({ type: "DELIVERY_PARTNER_REGISTER_SUCCESS" });
    } catch (error) {
      dispatch({ type: "DELIVERY_PARTNER_REGISTER_FAILED" });
    }
  };

export const deliveryPartnerLoginAction = (user) => async (dispatch) => {
  dispatch({ type: "DELIVERY_PARTNER_LOGIN_REQUEST" });
  try {
    const response = await axios.post("/api/deliverypartner/login", user);
    dispatch({
      type: "DELIVERY_PARTNER_LOGIN_SUCCESS",
      payload: response.data,
    });
    localStorage.setItem("deliveryPartner", JSON.stringify(response.data));
  } catch (error) {
    dispatch({ type: "DELIVERY_PARTNER_LOGIN_FAILED", payload: error });
  }
};
export const deliveryPartnerSingle = (username) => async (dispatch) => {
  dispatch({ type: "DELIVERY_PARTNER_SINGLE_REQUEST" });
  try {
    console.log(username);
    const response = await axios.post("/api/deliverypartner/getdp", {
      username,
    });
    dispatch({
      type: "DELIVERY_PARTNER_SINGLE_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({ type: "DELIVERY_PARTNER_SINGLE_FAILED", payload: error });
  }
};
