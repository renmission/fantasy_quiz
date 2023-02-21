import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function AuthHeader({ title, url, linkText }) {
  return (
    <div>
      <h2 className="mt-6 text-center text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
        {title}
        
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        Or{' '}
        <Link
          to={url}
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          {linkText}
        </Link>
      </p>
    </div>
  );
}

AuthHeader.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};

export default AuthHeader;
