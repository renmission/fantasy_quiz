import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthLayout from './layouts/authLayout';
import BaseLayout from './layouts/baseLayout';
import NotFound from './pages/NotFound';
import MainLayout from './layouts/mainLayout';
import Home from './pages/Home/home';
import Quiz from './pages/Quiz';

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseLayout />}>
      <Route index element={<Home />} />

      <Route path="dashboard" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="quiz" element={<Quiz />} />
      </Route>
      
      <Route path="auth" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);
