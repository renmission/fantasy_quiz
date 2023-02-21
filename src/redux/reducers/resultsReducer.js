import ActionTypes from "../constants/action-types";

export const resultsInitialValue = [];

export default (state = resultsInitialValue, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOAD_RESULTS_SUCCESS:
      return payload;

    default:
      return state;
  }
};
