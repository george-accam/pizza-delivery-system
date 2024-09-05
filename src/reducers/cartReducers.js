export const addToCartReducers = (state = { cartItem: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const alreadyexits = state.cartItem.find(
        (items) =>
          items.name === action.payload.name &&
          items.varient === action.payload.varient
      );
      console.log(alreadyexits);
      if (alreadyexits) {
        return {
          ...state,
          cartItem: state.cartItem.map((item) =>
            item.name === action.payload.name &&
            item.varient === action.payload.varient
              ? action.payload
              : item
          ),
          success: true,
          empty: false,
        };
      } else {
        return {
          ...state,
          cartItem: [...state.cartItem, action.payload],
          success: true,
          empty: false,
        };
      }
    case "DELETE_FROM_CART":
      return {
        ...state,
        cartItem: state.cartItem.filter(
          (item) => item.name !== action.payload.name
        ),
        empty: true,
        success: false,
      };
    case "EMPTY_THE_CART":
      return {
        ...state,
        cartItem: [],
        empty: true,
        success: false,
      };
    default:
      return state;
  }
};
