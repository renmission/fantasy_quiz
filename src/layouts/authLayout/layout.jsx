import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function AuthLayout({ user }) {
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="flex h-screen bg-orange-100 items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <Outlet />
      </div>
    </div>
  );
}

AuthLayout.propTypes = {
  user: PropTypes.shape({}),
};

AuthLayout.defaultProps = {
  user: null,
};

export default AuthLayout;
