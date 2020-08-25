import React from "react";
import loading from "../../images/loading-arrow.gif";
import "./Loading.scss";

export default function Loading() {
  return (
    <div className="loading">
      <img src={loading} alt="loading" />
    </div>
  );
}
