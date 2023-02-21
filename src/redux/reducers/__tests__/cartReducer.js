import ActionTypes from '../../constants/action-types';
import cartReducer, { cartInitialValue } from '../cartReducer';

const data = [{ id: 1, productId: 1, quantity: 1 }];

  const item = {
    productId: 4,
    quantity: 1,
    id: 4,
  };

describe('Cart Reducer', () => {
  it('should return the initial state', () => {
    expect(cartReducer(undefined, {})).toEqual(cartInitialValue);
  });

  it('should handle LOAD_CART_SUCCESS', () => {
    const action = { type: ActionTypes.LOAD_CART_SUCCESS, payload: data };
    const initialState = [];
    expect(cartReducer(initialState, action)).toEqual(data);
  });

  it('should handle ADD_CART_SUCCESS', () => {
    const action = { type: ActionTypes.ADD_CART_SUCCESS, payload: item };
    expect(cartReducer(data, action)).toEqual([...data, item]);
  });

  it('should handle UPDATE_CART_SUCCESS', () => {
    const updateData = { id: 2, productId: 2, quantity: 2 };
    const action = {
      type: ActionTypes.UPDATE_CART_SUCCESS,
      payload: updateData,
    };
    // const initialState = [
    //   { id: 1, productId: 1, quantity: 1 },
    //   { id: 2, productId: 2, quantity: 3 },
    // ];
    expect(cartReducer([...data, updateData], action)).toEqual([
      ...data,
      { ...updateData, quantity: 2 },
    ]);
  });

  it('should handle DELETE_CART_SUCCESS', () => {
    const updateData = { id: 2, productId: 2, quantity: 2 };
    const action = {
      type: ActionTypes.DELETE_CART_SUCCESS,
      payload: updateData,
    };
    // const initialState = [
    //   { id: 1, productId: 1, quantity: 1 },
    //   { id: 2, productId: 2, quantity: 3 },
    // ];
    expect(cartReducer([...data, updateData], action)).toEqual(data);
  });

  it('should handle RANDOM_TYPE', () => {
    const action = { type: 'RANDOM_TYPE', payload: data };
    expect(cartReducer(data, action)).toEqual(data);
  });
});
