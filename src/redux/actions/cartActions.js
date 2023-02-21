import ApiRequest from '../../utils/ApiRequest';
import ActionTypes from '../constants/action-types';

export const loadCartAction = () => async dispatch => {
  const type = ActionTypes.LOAD_CART;
  await ApiRequest({
    dispatch,
    apiData: {
      method: 'get',
      url: '660/cart',
    },
    type,
    meta: { loadingId: -1 },
  });
};

export const addCartItemAction = data => async dispatch => {
  const type = ActionTypes.ADD_CART;
  await ApiRequest({
    dispatch,
    apiData: {
      method: 'post',
      url: '660/cart',
      data,
    },
    type,
    meta: { loadingId: data.productId },
  });
};

export const updateCartItemAction = data => async dispatch => {
  const type = ActionTypes.UPDATE_CART;
  await ApiRequest({
    dispatch,
    apiData: {
      method: 'put',
      url: `660/cart/${data.id}`,
      data,
    },
    type,
    meta: { loadingId: data.productId },
  });
};

export const deleteCartItemAction = data => async dispatch => {
  const type = ActionTypes.DELETE_CART;
  await ApiRequest({
    dispatch,
    apiData: {
      method: 'delete',
      url: `660/cart/${data.id}`,
      data,
    },
    type,
    meta: { loadingId: data.productId },
  });
};
