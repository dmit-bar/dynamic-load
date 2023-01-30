import React from "react";
import { useNavigate } from "react-router-dom";

const SecondPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h2>Second page</h2>
      <button onClick={() => navigate("/")}>To first page</button>
    </div>
  );
};

export default SecondPage;
