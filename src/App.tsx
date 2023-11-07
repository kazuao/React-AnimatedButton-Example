import React, { useState } from "react";
import "./App.css";
import AnimationComponent from "./component/AnimationComponent";

function App() {
  return (
    <div style={{ position: "absolute", top: "50%", left: "25%" }}>
      <AnimationComponent />
    </div>
  );
}

export default App;
