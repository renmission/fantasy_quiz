import { combineReducers } from 'redux';
import user from './userReducer';
import loading from './loadingReducer';
import errors from './errorReducer';
import cart from './cartReducer';
import products from './productsReducer';
import questions from './questionsReducer';
import results from './resultsReducer';

export default combineReducers({
  user,
  loading,
  errors,
  cart,
  products,
  questions,
  results,
});
