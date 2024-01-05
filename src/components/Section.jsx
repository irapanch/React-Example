import React from "react";

export const Section = ({ title = "Default", data = [] }) => {
  return (
    <section>
      <h1>{title}</h1>
      <ul>
        <li>{data[0]?.title}</li>
        <li>{data[1]?.title}</li>
        <li>3</li>
      </ul>
    </section>
  );
};
