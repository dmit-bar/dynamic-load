import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

const LazyFirstPage = React.lazy(
  () =>
    import(/* webpackChunkName: "first-page" */ "./pages/first-page/first-page")
);
const LazySecondPage = React.lazy(
  () =>
    import(
      /* webpackChunkName: "second-page" */ "./pages/second-page/second-page"
    )
);

const AppRoot = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <React.Suspense>
          <Routes>
            <Route path="/" element={<LazyFirstPage />} />
            <Route path="/second" element={<LazySecondPage />} />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </React.StrictMode>
  );
};

const appRoot = document.getElementById("app-root");
const root = createRoot(appRoot!);

root.render(<AppRoot />);
