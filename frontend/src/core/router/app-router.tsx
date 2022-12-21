import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { MainScene } from "@/scenes";
import { switchRoutes } from "./routes";

export const AppRouter = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<MainScene />} />
                
        <Route path="*" element={<Navigate to="/" />} />      
      </Routes>
    </Router>
    </>
    
  );
};