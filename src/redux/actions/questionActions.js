import ApiRequest from '../../utils/ApiRequest';
import ActionTypes from '../constants/action-types';

export const loadQuestions = () => async dispatch => {
  const type = ActionTypes.LOAD_QUESTIONS;
  await ApiRequest({
    apiData: {
      method: 'get',
      url: '660/questions',
    },
    type,
    dispatch,
    meta: { loadingId: -1 },
  });
};


