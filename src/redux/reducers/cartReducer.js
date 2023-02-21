import ActionTypes from "../constants/action-types";

export const cartInitialValue = [];

export default (state = cartInitialValue, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOAD_CART_SUCCESS:
      return payload;

    case ActionTypes.ADD_CART_SUCCESS:
      return [...state, payload];

    case ActionTypes.UPDATE_CART_SUCCESS: {
      const index = state.findIndex(x => x.id === payload.id);
      return [...state.slice(0, index), payload, ...state.slice(index + 1)];
    }

    case ActionTypes.DELETE_CART_SUCCESS: {
      const index = state.findIndex(x => x.id === payload.id);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    }

    default:
      return state;
  }
};
