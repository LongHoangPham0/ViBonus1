import React from "react";
import { Outlet, Navigate } from "react-router-dom";

interface LoginProp {
  isLogged: boolean;
}
export default function PrivateRoute({ isLogged }: LoginProp) {
  return isLogged ? <Outlet /> : <Navigate to="/" />;
}
