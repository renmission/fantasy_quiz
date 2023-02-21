import ApiRequest from '../../utils/ApiRequest';
import ActionTypes from '../constants/action-types';

export const loadProducts = () => async dispatch => {
  const type = ActionTypes.LOAD_PRODUCTS;
  await ApiRequest({
    apiData: {
      method: 'get',
      url: '660/products',
    },
    type,
    dispatch,
    meta: { loadingId: -1 },
  });
};