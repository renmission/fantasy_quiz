import { connect } from 'react-redux';
// import { registerAction } from '../../redux/actions/authActions';
import Register from './Register';

const mapDispatchToProps =  dispatch  => ({
  // register: (values, actions) => registerAction(values, actions)(dispatch),
  register: values =>
  dispatch({
    type: 'REGISTER_REQUEST',
    payload: values,
    meta: { loadingId: -1 },
  }),
});

export default connect(null, mapDispatchToProps)(Register);
