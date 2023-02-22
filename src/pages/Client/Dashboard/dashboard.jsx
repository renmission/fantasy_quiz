import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard({ user }) {
  return (
    <div className="flex flex-col text-center pt-16">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Fantasy Quiz
      </h1>
      <h2 className="mt-6 text-xl leading-8 text-gray-700">
        Welcome back, {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
      </h2>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          to="quiz"
          className="rounded-md bg-[#31CD63] px-6 py-3 text-base font-semibold shadow-lg leading-7 text-white  hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#31CD63] w-[50%]"
        >
          Start Quiz
        </Link>
      </div>
    </div>
  );
}
