import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWordpressSimple,
} from "react-icons/fa";


import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>


            <FooterLinkItems>
              <FooterLinkTitle>Website Content</FooterLinkTitle>
              <FooterLink to="/anime"> Anime</FooterLink>
              <FooterLink to="/manga"> Manga</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/contact-us"> Contact</FooterLink>
              <FooterLink to="/about"> About</FooterLink>
            </FooterLinkItems>


          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <A  href="https://www.instagram.com/muhammedak321/" target="_blank" aria-label="Instagram">Instagram </A >
              <A  href="https://twitter.com/Muhammed3Ak" target="_blank" aria-label="Twitter"> Twitter</A >
              <A  href="https://www.linkedin.com/in/muhammed-akin-6534911b2/" target="_blank" aria-label="Linkedin"> Linkedin</A >
              <A  href="https://muhammedakin.be" target="_blank" aria-label="Linkedin"> Wordpress</A >

            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
          <FooterLink to="/manga"> <img  src={require('../../images/image.jpg')} alt='logo' /></FooterLink>
            <SocialIcons>
            <SVG>

              <SocialIconLink href="https://www.instagram.com/muhammedak321/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              </SVG>
              <SVG>
              <SocialIconLink href="https://twitter.com/Muhammed3Ak" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              </SVG>
              <SVG>
              <SocialIconLink href="https://www.linkedin.com/in/muhammed-akin-6534911b2/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
              </SVG>
              <SVG>
              <SocialIconLink href="https://muhammedakin.be/" target="_blank" aria-label="Linkedin">
                <FaWordpressSimple />
              </SocialIconLink>
              </SVG>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
const FooterContainer = styled.div`
  background-color: #2596be;
  min-height: 100vh;

`;

const FooterWrap = styled.div`
  padding: 50px 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  background-color: #2596be;
`;

const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
    background-color: #2596be;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
  
`;

const FooterLinksWrapper = styled.div`
  display: flex;
  background-color: #2596be;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;
  background-color: #2596be;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
    
  }
`;

const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
  background-color: #2596be;

`;
const A = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  background-color: #2596be;

  &:hover {
    color: #15cdfc;
    transition: 0.3s ease-out;
  }
`;


const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  background-color: #2596be;

  &:hover {
    color: #15cdfc;
    transition: 0.3s ease-out;
  }
`;

const SocialMedia = styled.div`
  max-width: 1000px;
  width: 100%;
  background-color: #2596be;

`;

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;
  background-color: #2596be;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  background-color: #2596be;
`;

const SocialIconLink = styled.a`
  color: #fff;
  background-color: #2596be;
  font-size: 24px;
`;

const SVG = styled.svg`
  color: #fff;
  background-color: #2596be;
  font-size: 24px;
`;