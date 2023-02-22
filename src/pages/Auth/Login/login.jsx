import React from "react";
import PropTypes from "prop-types";
import { loginFields, loginInitialValues } from "./loginFields";
import CustomForm from "../../../components/CustomForm";
import AuthHeader from "../../../components/AuthHeader";

function Login({ login }) {
  return (
   <div className="bg-white rounded-lg shadow-lg p-6">
    <AuthHeader
    url="/auth/register"
    title="Fantasy Quiz"
    linkText="Or create account here!"
  />
    <CustomForm
      initialValues={loginInitialValues}
      onSubmit={login}
      fields={loginFields}
      btnText="Sign in"
    ></CustomForm>
   </div>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default Login;
