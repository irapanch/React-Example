import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { StyledFlex } from "../../styledComponents/StyledFlex";
import styled from "styled-components";
import StyledLabel from "../../styledComponents/StyledLabel";
import StyledButton from "../../styledComponents/StyledButton";

const LoginFormik = () => {
  return (
    <Formik
      onSubmit={(values) => console.log("Formik values", values)}
      initialValues={{ name: "", surname: "", email: "" }}
    >
      <Form>
        <StyledForm>
          <StyledFlex $gap="20px" $direction="column">
            <h1>Login Form</h1>
            <StyledLabel>
              First Name
              <Field name="name" placeholder="Enter name..." />
            </StyledLabel>
            <StyledLabel>
              Last Name
              <Field name="surname" placeholder="Enter surname..." />
            </StyledLabel>
            <StyledLabel>
              Email
              <Field name="email" placeholder="Enter email..." />
            </StyledLabel>
            <StyledButton>Submit</StyledButton>
          </StyledFlex>
        </StyledForm>
      </Form>
    </Formik>
  );
};
const StyledForm = styled.div`
  background-color: white;
  padding: 10px 22px;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;
export default LoginFormik;
