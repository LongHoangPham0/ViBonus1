import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface LoginProp {
  isLogged: boolean;
}
export default function LoginRoute({ isLogged }: LoginProp) {
  return isLogged ? <Navigate to="/home" /> : <Outlet />;
}
