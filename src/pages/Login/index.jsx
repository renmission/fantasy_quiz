import { connect } from 'react-redux';
// import { loginAction } from '../../redux/actions/authActions';
import Login from './Login';

const mapDispatchToProps = dispatch => ({
  // login: (values, actions) => loginAction(values, actions)(dispatch),
  login: values =>
    dispatch({
      type: 'LOGIN_REQUEST',
      payload: values,
      meta: { loadingId: -1 },
    }),
});

export default connect(null, mapDispatchToProps)(Login);
