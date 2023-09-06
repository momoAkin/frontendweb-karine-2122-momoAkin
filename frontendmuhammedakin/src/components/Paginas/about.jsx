import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";


const about = () => {
  return (

    <Div >
        <div>
        <H1>About us</H1>
        <P>This website is made for my course front-end-webdevelopment at the HoGent. In this website I made an anime/film website where the user can find information about his favorite content. </P>
        </div>
        <div>
        <H1>Contact</H1>
        <P>If there is anything you would like to report or something you would like to suggest feel free to  <Link to="/contact-us" data-cy="about_input" > contact us.</Link></P>
        </div>
    </Div>
  )
}

export default about


const Div = styled.form`
margin-top: 30px;
margin-bottom: 30px;

 flex-wrap: wrap;    
`;

const H1 = styled.h1 `
      width: 50%;
      margin-left: auto;
      margin-right: auto;
`;



const P = styled.p `
      width: 50%;

      margin-left: auto;
      margin-right: auto;
`;
