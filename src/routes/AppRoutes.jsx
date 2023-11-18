import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import Login from '../pages/Login'
import ProtectedRoute from "./ProtectedRoute";
import AuthRoute from "./AuthRoute";


const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route index element={<Home />} />
       
      </Route>

      <Route element={<AuthRoute />}>
        <Route path="login" element={<Login />} />
     
      </Route>
    </Routes>
  );
};

export default AppRoutes;