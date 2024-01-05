import React from "react";

export const Section = ({ title = "Default", data = [] }) => {
  return (
    <section>
      <h1>{title}</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </section>
  );
};
