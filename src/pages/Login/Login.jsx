import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginFields, loginInitialValues } from './loginFields';
import CustomForm from '../../components/CustomForm';
import AuthHeader from '../../components/AuthHeader';

function Login({ login }) {
  return (
    <>
      <AuthHeader
        url="/auth/register"
        title="Fantasy Quiz"
        linkText="Register here!"
      />
      <CustomForm
        initialValues={loginInitialValues}
        onSubmit={login}
        fields={loginFields}
        btnText="Sign in"
      >
        
      </CustomForm>
    </>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default Login;
