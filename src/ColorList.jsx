import React from "react";
import { SingleColor } from "./SingleColor";

export const ColorList = ({ colors }) => {
  console.log(colors);
  return (
    <section className="colors">
      {colors.map((color, index) => {
        return <SingleColor key={index} color={color} />;
      })}
    </section>
  );
};
