import React from "react";
import PropTypes from "prop-types";
import { StyledItem, StyledList } from "./Section.styled";

export const Section = ({ title = "Default", data = [] }) => {
  return (
    <section>
      <h1>{title}</h1>
      <StyledList>
        {data.map((item) => (
          <StyledItem key={item.id}>{item.title}</StyledItem>
        ))}
      </StyledList>
    </section>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
