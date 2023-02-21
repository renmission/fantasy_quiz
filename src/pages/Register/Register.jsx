import React from 'react';
import PropTypes from 'prop-types';
import { registerFields, registerInitialValues } from './registerFields';
import CustomForm from '../../components/CustomForm';
import AuthHeader from '../../components/AuthHeader';

function Register({ register }) {
  return (
    <>
      <AuthHeader
        url="/auth"
        title="Fantasy Quiz"
        linkText="Already have a account?"
      />
      <CustomForm
        initialValues={registerInitialValues}
        onSubmit={register}
        fields={registerFields}
        btnText="Register"
      />
    </>
  );
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
};

export default Register;
