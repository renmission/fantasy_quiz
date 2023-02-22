import React from "react";
import PropTypes from "prop-types";
import { loginFields, loginInitialValues } from "./loginFields";
import CustomForm from "../../../components/CustomForm";

function Login({ login }) {
  return (
    <CustomForm
      initialValues={loginInitialValues}
      onSubmit={login}
      fields={loginFields}
      btnText="Sign in"
    ></CustomForm>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default Login;
