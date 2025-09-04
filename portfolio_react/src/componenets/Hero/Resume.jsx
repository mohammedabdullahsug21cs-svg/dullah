import React from "react";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"

function Resume() {
  return (
    <div className="resume">
      <iframe src="/Resume.pdf" width="100%" height="500px" />

    </div>
  );
}

export default Resume;
