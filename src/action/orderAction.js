import axios from "axios";

export const orderAction = (token, amount) => async (dispatch, getState) => {
  dispatch({ type: "ORDER_REQUEST" });
  const cartItem = getState().addToCartReducers.cartItem;
  const user = getState().userLoginReducer.user;
  const data = { token, amount, cartItem, user };
  try {
    const response = await axios.post("/api/order/placeorder", data);
    //console.log(response)  --- for checking
    dispatch({ type: "ORDER_SUCCESS" });
  } catch (error) {
    //console.log(error); --- for checking
    dispatch({ type: "ORDER_FAILED" });
  }
};

export const allOrderAction = () => async (dispatch, getState) => {
  dispatch({ type: "ALL_ORDER_REQUEST" });
  const user = getState().userLoginReducer.user;
  try {
    const orders = await axios.post("/api/order/userorders", {
      userid: user._id,
    });
    //console.log(orders.data.length);
    if (orders.data.length !== 0)
      dispatch({ type: "ALL_ORDER_SUCCESS", payload: orders.data });
    else dispatch({ type: "ALL_ORDER_SUCCESS", payload: null });
  } catch (error) {
    console.log(error);
    dispatch({ type: "ALL_ORDER_FAILED", payload: error });
  }
};

export const allAdminOrdersAction = () => async (dispatch) => {
  dispatch({ type: "ALL_ADMIN_ORDER_REQUEST" });
  try {
    const response = await axios.get("/api/order/allorders");
    dispatch({ type: "ALL_ADMIN_ORDER_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "ALL_ADMIN_ORDER_FAILED", payload: error });
  }
};

export const orderUpdateAction = (id, dp) => async (dispatch) => {
  console.log(id);
  dispatch({ type: "ORDER_UPDATE_REQUEST" });
  try {
    const response = await axios.post("/api/order/updateorder", { id, dp });
    console.log(response);
    alert("Ordered Updated! Please refresh the page");
    dispatch({ type: "ORDER_UPDATE_SUCCESS" });
  } catch {
    dispatch({ type: "ORDER_UPDATE_FAILED" });
  }
};

export const orderUpdateStatusAction = (id, status) => async (dispatch) => {
  dispatch({ type: "ORDER_UPDATE_REQUEST" });
  try {
    const response = await axios.post("/api/order/updatestatus", {
      id,
      status,
    });
    console.log(response);
    alert("Ordered delivered sucessfully! Please refresh the page");
    dispatch({ type: "ORDER_UPDATE_SUCCESS" });
  } catch {
    dispatch({ type: "ORDER_UPDATE_FAILED" });
  }
};
