import React from "react";

import styled from "styled-components";
import StyledLabel from "../../styledComponents/StyledLabel";

import StyledButton from "../../styledComponents/StyledButton";
import { StyledFlex } from "../../styledComponents/StyledFlex";

const RegisterForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const position = form.elements.surname.value;

    const user = { name, position };
    console.log(user);
    form.reset();
  };
  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledFlex $gap="20px" $direction="column">
        <h1>Register form</h1>
        <StyledLabel>
          First Name
          <input name="name" placeholder="Enter name..." />
        </StyledLabel>
        <StyledLabel>
          Last Name
          <input name="surname" placeholder="Enter surname..." />
        </StyledLabel>
        <StyledLabel>
          Age
          <input name="age" type="number" placeholder="Enter age..." />
        </StyledLabel>
        <StyledLabel $display="flex">
          <input type="checkbox" />
          I'm confirm this rules!
        </StyledLabel>
        <StyledButton>Submit</StyledButton>
      </StyledFlex>
    </StyledForm>
  );
};
const StyledForm = styled.form`
  border: 1px solid black;
  background-color: white;
  padding: 10px 22px;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;
export default RegisterForm;
