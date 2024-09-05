export const deliveryPartnerRegisterReducers = (state = {}, action) => {
  switch (action.type) {
    case "DELIVERY_PARTNER_REGISTER_REQUEST":
      return {
        loading: true,
      };
    case "DELIVERY_PARTNER_REGISTER_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "DELIVERY_PARTNER_REGISTER_FAILED":
      return {
        loading: false,
        failed: true,
      };
    default:
      return state;
  }
};

export const deliveryPartnerLoginReducers = (state = {}, action) => {
  switch (action.type) {
    case "DELIVERY_PARTNER_LOGIN_REQUEST":
      return {
        loading: true,
      };
    case "DELIVERY_PARTNER_LOGIN_SUCCESS":
      return {
        loading: false,
        deliveryPartner: action.payload,
      };
    case "DELIVERY_PARTNER_LOGIN_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const deliveryPartnerSingleReducer = (state = {}, action) => {
  switch (action.type) {
    case "DELIVERY_PARTNER_SINGLE_REQUEST":
      return {
        loading: true,
      };
    case "DELIVERY_PARTNER_SINGLE_SUCCESS":
      return {
        loading: false,
        dp: action.payload,
      };
    case "DELIVERY_PARTNER_SINGLE_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
