import { connect } from 'react-redux';
import Home from './home';
import ActionTypes from '../../redux/constants/action-types';

const mapStateToProps = ({ loading, errors, questions, user: { user }, results }) => ({
  loading: loading.some(
    x => x.action === ActionTypes.LOAD_RESULTS
  ),
  hasError: errors.some(
    x => x.action === ActionTypes.LOAD_RESULTS
  ),
  questions,
  user,
  results
});



const mapDispatchToProps = dispatch => ({
  // loadProducts: () => loadProducts()(dispatch),
  // loadCart: () => loadCartAction()(dispatch),
  // loadProducts: () => dispatch({ type: ActionTypes.LOAD_PRODUCTS_REQUEST, meta: { loadingId: -1 }}),
  // loadCart: () => dispatch({ type: ActionTypes.LOAD_CART_REQUEST, meta: { loadingId: -1 }}),
  // loadProducts: () =>
  //   dispatch({
  //     type: ActionTypes.LOAD_PRODUCTS_REQUEST,
  //     payload: {
  //       url: '660/products',
  //       method: 'get',
  //     },
  //     meta: {
  //       loadingId: -1,
  //     },
  //   }),
  // loadCart: () =>
  //   dispatch({
  //     type: ActionTypes.LOAD_CART_REQUEST,
  //     payload: {
  //       url: '660/cart',
  //       method: 'get',
  //     },
  //     meta: {
  //       loadingId: -1,
  //     },
  //   }),

  loadResults: () =>
    dispatch({
      type: ActionTypes.LOAD_RESULTS_REQUEST,
      payload: {
        url: 'results',
        method: 'get',
      },
      meta: {
        loadingId: -1,
      },
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
