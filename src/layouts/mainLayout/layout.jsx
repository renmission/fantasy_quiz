import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';

function MainLayout({ user }) {
  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <>
      <Outlet />
    </>
  );
}

MainLayout.propTypes = {
  user: PropTypes.shape({}),
};

MainLayout.defaultProps = {
  user: null,
};

export default MainLayout;
