import ActionTypes from "../constants/action-types";

export const questionsInitialValue = [];

export default (state = questionsInitialValue, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOAD_QUESTIONS_SUCCESS:
      return payload;

    default:
      return state;
  }
};
