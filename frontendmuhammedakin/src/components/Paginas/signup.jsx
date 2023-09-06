

import React from "react";
import styled from 'styled-components'

function Register() {

    return (
        <Main >
            <Form>
            <Label>Sign Up</Label>
            <Input data-cy='nameSignup_input' type="text" placeholder="name"/>
            <Input data-cy='emailSignup_input' type="email" placeholder="email" />
            <Input data-cy='pwSignup_input' type="password" placeholder="password" />
            <Input data-cy='pw2Signup_input' type="password" placeholder="repassword" />

            <Inputbtn data-cy='signup_button' type="submit" value="Sing up" />
            </Form>
    </Main>

    )
}

export default Register;

// Styles
const Main = styled.main `
    flex: 1 1 0%;
	padding: 0px 16px;


`;


const Form = styled.form`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 69%;

    font-size: 16px;
`;


const Label = styled.label`
      margin-top: 1rem;
      margin-left: 40%;
      margin-right: 40%;
      font-size: 30px;

`;

const Input = styled.input`
    width: 69%;
    margin-left: 40%;
    margin-right: 40%;
    margin-top: 0.5rem;

      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(0, 0, 0);

      &:focus {
        border: 2px solid #2596be;}
`;

const Inputbtn = styled.input.attrs({ type: 'submit' })`
    width: 60%;
    margin-left: 45%;
    margin-right: 50%;

      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(0, 0, 0);


    margin-top: 1rem;
    margin-bottom: 0.5rem;

    cursor: pointer;
    background-color: #FF69B4;
    color: white;
    border: none;
`;

