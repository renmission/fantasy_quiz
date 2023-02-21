import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
  StarIcon,
} from '@heroicons/react/20/solid';
import { Menu, Transition } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Home({
  loading,
  hasError,
  user,
  loadResults,
  results
}) {
  const loadData = useCallback(async () => {
    await Promise.resolve([loadResults()]);
  }, [loadResults]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (loading) {
    return <h1 data-testid="loading">Loading...</h1>;
  }

  if (hasError) {
    return <h1 data-testid="error">Something went wrong...</h1>;
  }

  console.log('RESULTS!!!!!!!', results);


  return (
    <div className="h-screen">
      <div className="flex flex-col py-4 items-center md:flex-row lg:flex  lg:items-center lg:justify-between">
        <div className="flex-1">
          <h2 className="text-4xl font-thin m-6">
            Welcome back,{' '}
            <span className="font-normal">
              {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
            </span>
          </h2>
        </div>

        <span className="m-6">
          <Link to={'quiz'}>
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-green-600 px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-green-700 "
            >
              <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Start Quiz
            </button>
          </Link>
        </span>
      </div>
      <div className="m-6">
        <div className="w-full bg-white p-6 rounded-md shadow-md mt-4">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Take 1 
          </h2>
          <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <StarIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              200
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <CalendarIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              January 9, 2020
            </div>
          </div>
        </div>

        <div className="w-full bg-white p-6 rounded-md shadow-md mt-4">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Take 2
          </h2>
          <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <StarIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              200
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <CalendarIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              January 9, 2020
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Home.propTypes = {
//   loadProducts: PropTypes.func.isRequired,
//   loadCart: PropTypes.func.isRequired,
//   products: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       price: PropTypes.number.isRequired,
//       description: PropTypes.string.isRequired,
//       category: PropTypes.string.isRequired,
//       image: PropTypes.string.isRequired,
//       rating: PropTypes.exact({
//         rate: PropTypes.number.isRequired,
//         count: PropTypes.number.isRequired,
//       }).isRequired,
//     }),
//   ).isRequired,
//   loading: PropTypes.bool.isRequired,
//   hasError: PropTypes.bool.isRequired,
// };

export default Home;
