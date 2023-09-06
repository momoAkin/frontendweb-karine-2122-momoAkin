import React from 'react'
import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import { GiCrystalBars } from "react-icons/gi";

const navigatieElementen = ({toggle}) => {
  return (
    <div>
        <Nav>
            <NavLink to="/">
                <img  src={require('../../images/image.jpg')} alt='logo' />
            </NavLink>
            <Bars onClick={toggle}/>
            <NavMenu>
              
              <NavLink to='/manga' >
                Manga
              </NavLink>
              <NavLink to='/anime' >
                Anime
              </NavLink>
              
              <NavLink to='/about' >
                About
              </NavLink>
              <NavLink to='/contact-us' >
                Contact-us
              </NavLink>
              <NavLink to='/sign-up' >
                Sign-up
              </NavLink>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
            </NavBtn>
        </Nav>
    </div>
  )
}

export default navigatieElementen


const Nav = styled.nav`
    background: #2596be;
    height: 80px; 
    display: flex;
    justify-content: space-between;
    padding:0.5rem calc((100vw - 1000px)/2);
    z-index:10;

    
`;

const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    background: #2596be;

    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #15cdfc;
    }
`;

const Bars = styled(GiCrystalBars)`
  display: none;
  color: #fff;
  background: #2596be;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    background: #2596be;
  }
`;
const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
    display: none;
  }

`;
const NavBtn = styled.nav`
    display:  flex;
    align-items: center;
    margin-right:24px;
    background: #2596be;

    @media screen and (max-width: 768px){
        display: none;    }
`;
const NavBtnLink = styled(Link)`
    border-radius: 3px;
    background: #FF69B4;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition:  all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff ;
        color: #010606;
    }
`;


