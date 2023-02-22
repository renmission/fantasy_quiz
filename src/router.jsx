import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Dashboard from "./pages/Client/Dashboard";
import Quiz from "./pages/Client/Quiz";
import Results from "./pages/Client/Results";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import AuthLayout from "./Layouts/authLayout";
import BaseLayout from "./Layouts/baseLayout";
import MainLayout from "./Layouts/mainLayout";

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseLayout />}>
      <Route path="dashboard" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="results" element={<Results />} />
      </Route>
      <Route path="auth" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Route>
  )
);
