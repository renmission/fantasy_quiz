import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';

function MainLayout({ user }) {
  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="flex h-screen bg-orange-100 items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="w-full space-y-8">
      <Outlet />
    </div>
  </div>
  );
}

MainLayout.propTypes = {
  user: PropTypes.shape({}),
};

MainLayout.defaultProps = {
  user: null,
};

export default MainLayout;
