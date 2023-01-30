import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import FirstPage from "./pages/first-page/first-page";
import SecondPage from "./pages/second-page/second-page";

const AppRoot = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/second" element={<SecondPage />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

const appRoot = document.getElementById("app-root");
const root = createRoot(appRoot!);

root.render(<AppRoot />);
