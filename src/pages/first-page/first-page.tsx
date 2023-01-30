import React from "react";
import { useNavigate } from "react-router-dom";
import * as _ from "../../lib/lodash";

const FirstPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h2>{_.capitalize("first page")}</h2>
      <button onClick={() => navigate("/second")}>To second page</button>
    </div>
  );
};

export default FirstPage;
