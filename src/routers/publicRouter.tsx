import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const UserCard = lazy(() => import("../components/common/NotFound"));
const NotFound = lazy(() => import("../components/global/UserCard/UserCard"));

const publicRouter = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/userCard" element={<UserCard />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};

export default publicRouter;
