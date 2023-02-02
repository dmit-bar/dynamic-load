import React from "react";
import { useNavigate } from "react-router-dom";
import * as _ from "../../lib/lodash";

const SecondPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h2>{_.capitalize("second page")}</h2>
      <button onClick={() => navigate("/")}>To first page</button>
    </div>
  );
};

export default SecondPage;
