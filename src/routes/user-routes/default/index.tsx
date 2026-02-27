import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CVPages, LandingPages } from "../../../pages/user-pages";
import { ProjectDetailPage } from "../../../component";

interface props {}

const UsersRoute: React.FC<props> = ({}) => {
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Navigate to="/" replace />} />
        <Route path="/home" element={<LandingPages />} />
        <Route path="/cv" element={<CVPages />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
      </Routes>
    </>
  );
};
export default UsersRoute;
