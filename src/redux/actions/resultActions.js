import ApiRequest from '../../utils/ApiRequest';
import ActionTypes from '../constants/action-types';

export const loadResults = () => async dispatch => {
  const type = ActionTypes.LOAD_RESULTS;
  await ApiRequest({
    apiData: {
      method: 'get',
      url: 'results',
    },
    type,
    dispatch,
    meta: { loadingId: -1 },
  });
};


export const addResultAction = data => async dispatch => {
  const type = ActionTypes.ADD_RESULT;
  await ApiRequest({
    dispatch,
    apiData: {
      method: 'post',
      url: 'results',
      data,
    },
    type,
    meta: { loadingId: data.productId },
  });
};


