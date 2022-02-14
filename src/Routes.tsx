import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import { Signup, Login } from './components/Auth'
import Dashboard from './components/Dashboard'


const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LandingPage/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/dashboard" element={<Dashboard/>} />
  </Routes>
);

export default AppRoutes
