import React, { useEffect, Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./css/style.css";

import CreatePostPage from "./pages/CreatePostPage";
import Viforum from "./pages/Home/Viforum";
import DetailPost from "./pages/DetailPost";

// const CreatePostPage = lazy(() => import('./pages/CreatePostPage'))
// const Viforum = lazy(() => import('./pages/Home/Viforum'))
// const DetailPost = lazy(() => import('./pages/DetailPost'))
const HomeTemplate = lazy(() => import("./templates/HomeTemplate"));
const DocumentPage = lazy(() => import("./pages/DocumentPage"));
const Transactions = lazy(() => import("./pages/Transactions"));
const Redemption = lazy(() => import("./pages/Redemption"));
const Home = lazy(() => import("./pages/Home"));
const ConvertPoint = lazy(() => import("./pages/ConvertPoint"));
const RedeemList = lazy(() => import("./pages/RedeemList"));
const Edit = lazy(() => import("./pages/Edit"));
const RedeemTemplate = lazy(() => import("./templates/RedeemTemplate"));
const NormalTemplate = lazy(() => import("./templates/NormalTemplate"));
const TransactionTemple = lazy(() => import("./templates/TransactionTemple"));
const Login = lazy(() => import("./pages/Login"));
const Profile = lazy(() => import("./pages/Profile"));
const NotFound = lazy(() => import("./components/common/NotFound"));
const Accounts = lazy(() => import("./pages-admin/components/Accounts"));
const Items = lazy(() => import("./pages-admin/components/Items"));
const Layout = lazy(() => import("./pages-admin/Layout"));
const Loading = lazy(() => import("./components/common/Loading"));

const App = () => {
  let token = localStorage.getItem("auth");

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomeTemplate />} />
        {/* {token ? ( */}
          <>
            <Route>
              <Route element={<HomeTemplate />}>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home type="string" />} />
                <Route path="/convert" element={<ConvertPoint />} />
                <Route
                  path="/home/viforum"
                  element={<Viforum type="string" />}
                />
              </Route>
              <Route element={<RedeemTemplate />}>
                <Route path="redeem" element={<RedeemList />} />
              </Route>
              <Route element={<NormalTemplate />}>
                <Route path="/detail/:id" element={<DetailPost />} />
                <Route path="/post" element={<CreatePostPage />} />
              </Route>
              <Route element={<TransactionTemple />}>
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/redemption" element={<Redemption />} />
                <Route path="/document" element={<DocumentPage />} />
                <Route path="/editprofile" element={<Edit />} />
              </Route>
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="*" element={<NotFound />} />
            <Route path="/admin" element={<Layout />}>
              <Route path="account" element={<Accounts />} />
              <Route path="items" element={<Items />} />
            </Route>
          </>
        ) : (
          <Route>
            <Route path={"*"} element={<Navigate to="/" />} />
            <Route path="/" element={<Login />} />
          </Route>
          {/* )} */}
      </Routes>
    </Suspense>
  );
};

export default App;
