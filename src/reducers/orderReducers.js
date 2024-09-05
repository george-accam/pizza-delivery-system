export const orderReducers = (state = {}, action) => {
  switch (action.type) {
    case "ORDER_REQUEST":
      return {
        loading: true,
      };
    case "ORDER_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "ORDER_FAILED":
      return {
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export const allOrderReducers = (state = {}, action) => {
  switch (action.type) {
    case "ALL_ORDER_REQUEST":
      return {
        loading: true,
      };
    case "ALL_ORDER_SUCCESS":
      return {
        loading: false,
        userorders: action.payload,
      };
    case "ALL_ORDER_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const allAdminOrderReducers = (state = {}, action) => {
  switch (action.type) {
    case "ALL_ADMIN_ORDER_REQUEST":
      return {
        loading: true,
      };
    case "ALL_ADMIN_ORDER_SUCCESS":
      return {
        loading: false,
        orders: action.payload,
      };
    case "ALL_ADMIN_ORDER_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const orderUpdateReducers = (state = {}, action) => {
  switch (action.type) {
    case "ORDER_UPDATE_REQUEST":
      return {
        loading: true,
      };
    case "ORDER_UPDATE_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "ORDER_UPDATE_FAILED":
      return {
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
