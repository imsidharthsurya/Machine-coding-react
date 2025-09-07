import React from "react";
import TrafficLight from "./TrafficLight";

const Traffic = () => {
  return (
    <div className="traffic">
      <TrafficLight color="green" isActive={true} />
      <TrafficLight color="yellow" isActive={false} />
      <TrafficLight color="red" isActive={false} />
    </div>
  );
};

export default Traffic;
