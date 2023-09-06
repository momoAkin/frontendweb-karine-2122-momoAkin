

import React from "react";
import styled from "styled-components";

import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
            
          <SidebarLink to="/manga" onClick={toggle}>manga</SidebarLink>
          <SidebarLink to="/anime" onClick={toggle}>anime</SidebarLink>
          <SidebarLink to="/about" onClick={toggle}>about</SidebarLink>
          <SidebarLink to="/contact-us" onClick={toggle}>contact-us</SidebarLink>
          <SidebarRoute to="/sign-in">Sign In</SidebarRoute>

        </SidebarMenu>

      </SidebarWrapper>
    </SidebarContainer>

  );
};

export default Sidebar;



 const SidebarContainer = styled.aside`
   border-radius: 0.5em;

  position: fixed;
  z-index: 999;
  width: 40%;
  height: 40%;
  background: #1D7898
;
  display: grid;
  align-items: center;
  margin-top:5px ;
  top: 0;
  right: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  
`;

 const CloseIcon = styled(FaTimes)`
  color: #2596be;
`;

 const Icon = styled.div`
  position: absolute;
  top: 0.3rem;
  right: 0.45rem;
  background: tra;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

 const SidebarWrapper = styled.div`
  color: #fff;
`;

 const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 45px);
  text-align: center;
  background: #1D7898;
  height: 250px;
  border-radius: 0.5em;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

 const SidebarLink = styled(Link)`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: 1rem;
  text-decoration: none;

  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: black;
  background-color: #fff;
  border: solid 1px black;

  cursor: pointer;
  &:hover {
    color: #89CFF0;
    transition: 0.2s ease-in-out;
  }
`;

//  const SideBtnWrap = styled.div`
//   display: flex;
//   justify-content: center;
//   background: #2596be;
//   border-radius: 10px;
// `;

 const SidebarRoute = styled(Link)`
  border-radius: 50px;
  background: #FF69B4;
  white-space: nowrap;
  padding: 16px 64px;
  margin-top: 5px;
  //margin: auto;
  margin-bottom:auto;
  margin-left:auto;
  margin-right:auto;

  color: #010606;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: #010606;
    background-color: #fff;
    transition: all 0.2s ease-in-out;
  }
`;