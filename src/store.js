import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  addNewPizzaReducers,
  deletePizzaReducers,
  getAllPizzaDataReducers,
} from "./reducers/pizzaReducers";
import { addToCartReducers } from "./reducers/cartReducers";
import {
  addNewOtherReducers,
  deleteOtherReducers,
  otherReducers,
} from "./reducers/otherReducers";
import {
  allUserReducer,
  userDeleteReducer,
  userLoginReducer,
  userRegisterReducer,
} from "./reducers/userReducers";
import {
  allAdminOrderReducers,
  allOrderReducers,
  orderReducers,
} from "./reducers/orderReducers";
import {
  deliveryPartnerLoginReducers,
  deliveryPartnerRegisterReducers,
  deliveryPartnerSingleReducer,
} from "./reducers/deliveryPartnerReducers";

const finalReducer = combineReducers({
  getAllPizzaDataReducers: getAllPizzaDataReducers,
  otherReducers: otherReducers,
  addToCartReducers: addToCartReducers,
  userRegisterReducer: userRegisterReducer,
  userLoginReducer: userLoginReducer,
  orderReducers: orderReducers,
  allOrderReducers: allOrderReducers,
  addNewPizzaReducers: addNewPizzaReducers,
  addNewOtherReducers: addNewOtherReducers,
  deletePizzaReducers: deletePizzaReducers,
  deleteOtherReducers: deleteOtherReducers,
  allUserReducer: allUserReducer,
  userDeleteReducer: userDeleteReducer,
  allAdminOrderReducers: allAdminOrderReducers,
  deliveryPartnerRegisterReducers: deliveryPartnerRegisterReducers,
  deliveryPartnerLoginReducers: deliveryPartnerLoginReducers,
  deliveryPartnerSingleReducer: deliveryPartnerSingleReducer,
});

const cartItem = localStorage.getItem("cartItem")
  ? JSON.parse(localStorage.getItem("cartItem"))
  : [];
const user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const deliveryPartner = localStorage.getItem("deliveryPartner")
  ? JSON.parse(localStorage.getItem("deliveryPartner"))
  : null;

const initialState = {
  addToCartReducers: {
    cartItem: cartItem,
  },
  userLoginReducer: {
    user: user,
  },
  deliveryPartnerLoginReducers: {
    dp: deliveryPartner,
  },
};

const composeEnchansers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  composeEnchansers(applyMiddleware(thunk))
);

export default store;
