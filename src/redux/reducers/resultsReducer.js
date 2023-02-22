export const resultInitialState = [];

export default (state = resultInitialState, { type, payload }) => {
  switch (type) {
    case "POST_RESULTS_SUCCESS":
      return [payload];

    default:
      return state;
  }
};
