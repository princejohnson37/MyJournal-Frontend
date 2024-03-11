import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthPageLayout from "../layouts/AuthPages/AuthPageLayout";
import LoginPage from "../pages/AuthPages/LoginPage";
import ErrorPage from "../pages/ErrorPages/CommonError";
import SignUpPage from "../pages/AuthPages/SignUpPage";

function RouterContainer() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthPageLayout />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<SignUpPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterContainer;
