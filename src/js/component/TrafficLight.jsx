import React, { useState, useEffect } from "react";
import "../../styles/TrafficLight.css";

const TrafficLight = () => {
  const [color, setColor] = useState("null");

  const handleLightClick = (light) => {
    setColor(light);
    };

  return (
    <div className="traffic-light">
       <div className={`light red ${color === "red" ? "active" : ""}`}
        onClick={() => handleLightClick("red")}>
        </div>

      <div className={`light yellow ${color === "yellow" ? "active" : ""}`}
        onClick={() => handleLightClick("yellow")}></div>

      <div className={`light green ${color === "green" ? "active" : ""}`}
        onClick={() => handleLightClick("green")}></div>
    </div>
  );
};

export default TrafficLight;


