import ActionTypes from "../constants/action-types";

export const productsInitialValue = [];

export default (state = productsInitialValue, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOAD_PRODUCTS_SUCCESS:
      return payload;

    default:
      return state;
  }
};
