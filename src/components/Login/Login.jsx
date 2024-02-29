import React, { useContext, useState } from "react";
import { StyledFlex } from "../../styledComponents/StyledFlex";
import styled from "styled-components";
import StyledLabel from "../../styledComponents/StyledLabel";
import StyledButton from "../../styledComponents/StyledButton";
import { MyContext } from "../../context/ContextProvider";


const Login = () => {

  const {login} = useContext(MyContext)

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')


  const onSubmit = (e) => {
    e.preventDefault();
   login({name, email})
    console.log({ name, surname, email });
    setName('')
    setSurname('')
    setEmail('')

  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledFlex $gap="20px" $direction="column">
        <h1>Login Form</h1>
        <StyledLabel>
          First Name
          <input onChange={({target})=> setName(target.value)} value={name} name="name" placeholder="Enter name..." />
        </StyledLabel>
        <StyledLabel>
          Last Name
          <input onChange={({target})=> setSurname(target.value)}value={surname} name="surname" placeholder="Enter surname..." />
        </StyledLabel>
        <StyledLabel>
          Email
          <input onChange={({target})=> setEmail(target.value)}value={email} name="email" placeholder="Enter email..." />
        </StyledLabel>
        <StyledButton>Submit</StyledButton>
      </StyledFlex>
    </StyledForm>
  );
};
const StyledForm = styled.form`
  background-color: white;
  padding: 10px 22px;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;
export default Login;
