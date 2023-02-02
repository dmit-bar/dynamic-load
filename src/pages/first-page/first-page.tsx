import React from "react";
import { useNavigate } from "react-router-dom";
import { LazySecondPage } from "../..";

const FirstPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h2>First page</h2>
      <button
        onClick={() => navigate("/second")}
        onMouseOver={() => LazySecondPage.preload()}
      >
        To second page
      </button>
    </div>
  );
};

export default FirstPage;
