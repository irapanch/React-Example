import React from "react";

export const Section = ({ title = "Default" }) => {
  return (
    <section>
      <h1>{title}</h1>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </section>
  );
};
