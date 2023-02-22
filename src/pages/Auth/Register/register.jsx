import React from 'react';
import PropTypes from 'prop-types';
import { registerFields, registerInitialValues } from './registerFields';
import CustomForm from '../../../components/CustomForm';
import AuthHeader from '../../../components/AuthHeader';

function Register({ register }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <AuthHeader
        url="/auth"
        title="Fantasy Quiz"
        linkText="Already have an account,click here!"
      />
      <CustomForm
        initialValues={registerInitialValues}
        onSubmit={register}
        fields={registerFields}
        btnText="Sign up"
      />
    </div>
  );
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
};

export default Register;
