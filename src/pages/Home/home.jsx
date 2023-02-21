import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='h-screen flex flex-col 
    items-center justify-center'>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
      
        <h1 className="mb-4 py-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
          Welcome to Fantasy Quiz #156
        </h1>
        <p className="mb-8 text-lg font-normal text-slate-500 lg:text-xl sm:px-16 xl:px-48">
        Join a community of curious minds and compete with players from around the world in our dynamic and diverse quiz app - the perfect way to keep your mind sharp and entertained!
        </p>
        <div className=" mb-8 lg:mb-16 space-y-4">
          <a
            href="/auth"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border bg-green-500 hover:bg-green-600"
          >
            
            Take a quiz today!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
