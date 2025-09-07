import React from "react";

const TrafficLight = ({ color, isActive }) => {
  return (
    <div style={{ backgroundColor: color }} className="traffic-light">
      <span>{isActive ? "ON" : "OFF"}</span>
    </div>
  );
};

export default TrafficLight;
