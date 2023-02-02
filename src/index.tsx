import loadable from "@loadable/component";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

const Fallback = <div>Loading...</div>;

const LazyFirstPage = loadable(
  () =>
    import(
      /* webpackChunkName: "first-page" */ "./pages/first-page/first-page"
    ),
  {
    fallback: Fallback,
  }
);
export const LazySecondPage = loadable(
  () =>
    import(
      /* webpackChunkName: "second-page" */ "./pages/second-page/second-page"
    ),
  {
    fallback: Fallback,
  }
);

const AppRoot = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LazyFirstPage />} />
          <Route path="/second" element={<LazySecondPage />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

const appRoot = document.getElementById("app-root");
const root = createRoot(appRoot!);

root.render(<AppRoot />);
