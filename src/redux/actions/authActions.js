import ActionTypes from '../constants/action-types';
import ApiRequest from '../../utils/ApiRequest';

export const loginAction = values => async dispatch => {
  const type = ActionTypes.LOGIN;
  await ApiRequest({
    dispatch,
    apiData: {
      method: 'post',
      url: 'users/login',
      data: values,
    },
    type,
    meta: { loadingId: -1 },
  });
};

export const registerAction = (values, actions) => async dispatch => {
  const type = ActionTypes.REGISTER;

  const {confirmPassword, ...rest} = values;

  if(confirmPassword !== rest.password) {
    return actions.setErrors({ serverError: 'Password did not match' });
  }

  await ApiRequest({
    dispatch,
    apiData: {
      method: 'post',
      url: 'users/register',
      data: rest,
    },
    type,
    meta: { loadingId: -1 },
  });
};
