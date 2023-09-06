import styled from 'styled-components'


import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {useState} from 'react';


import Swal from "sweetalert2";  


// npm i @emailjs/browser

const Contact = () => {
  const [emptyEmail, setEmptyEmail] = useState('');
  const [emptyName, setEmptyName] = useState('');
  const [emptyMessage, setEmptyMessage] = useState('');



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if(emptyEmail.trim().length !== 0 && emptyName.trim().length !== 0 && emptyMessage.trim().length !== 0){

      emailjs
        .sendForm(
          "service_5p7acem",
          "template_tyj43ht",
          form.current,
          "NhC9M3jA7wDYVSWuz"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
            Swal.fire(
              'Your message has been send!',
              'Click the button to close!',
              'success'
            )
          },
          (error) => {
            console.log(error.text);
            Swal.fire(
            'Error!',
            'Something Wrong happend!',
            'error'
        )
          }
        );
        setEmptyMessage('');
        setEmptyName('');
        setEmptyEmail('');
        }
      else {
        Swal.fire(
          'You have not filled in all the fields!',
          'Click the button to close!',
          'error'
        )
      }
  };
  
  return (
    <Main >
            <Form ref={form} onSubmit={sendEmail}>
            <Label>Name</Label>
            <Input data-cy='name_input' type="text" name="from_name" onChange={event => setEmptyName(event.target.value)} value={emptyName}/>
            <Label>Email</Label>
            <Input data-cy='email_input' type="email"  name="from_" onChange={event => setEmptyEmail(event.target.value)} value={emptyEmail}/>
            <Label>Message</Label>
            <Text data-cy='message_input' name="message" onChange={event => setEmptyMessage(event.target.value)} value={emptyMessage}/>
                
            <Inputbtn data-cy='submit_mesage' type="submit" value="Send" />
            </Form>
    </Main>
  )
}
export default Contact;

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


`;
const Text = styled.textarea`
        max-width: 69%;
      min-width: 69%;
      width: 100%;
      max-height: 131px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      margin-left: 40%;
      margin-right: 40%;

      border: 1px solid rgb(0, 0, 0);

      &:focus {
        border: 2px solid #2596be;
      }

`;
const Input = styled.input`
    width: 69%;
    margin-left: 40%;
    margin-right: 40%;

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

