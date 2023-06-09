import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookSquare, FaGooglePlay } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: #333;
  color: #fff;
  padding: 30px;
  text-align: center;
  font-size: 14px;
  font-family: 'Arial', sans-serif;
`;

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
  transition: color 0.3s ease;
  &:hover {
    text-decoration: underline;
    color: #aaa;
  }
`;

const SocialIcons = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > * {
    color: #fff;
    font-size: 24px;
    margin: 0 5px;
    transition: color 0.3s ease;
    &:hover {
      color: #aaa;
    }
  }
`;

const LocationList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  padding: 0;
  list-style: none;
  text-align: center;
  font-weight: bold;
  font-size: 15px;
`;

const LocationListItem = styled.li`
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`;

export default function Footer() {
  return (
    <FooterContainer style={{color:'aqua'}}>
      <FooterLink to="/">Home</FooterLink>
      <FooterLink to="/about">About</FooterLink>
      <FooterLink to="/contact">Contact Us</FooterLink>
      <SocialIcons>
        <Link to="/contact"><FaFacebookSquare /></Link>
        <Link to="/contact"><FaInstagram /></Link>
        <FaGooglePlay />
      </SocialIcons>
      
      <LocationList>
        <LocationListItem style={{ color: '#ff9f00' }}>India</LocationListItem>
        <LocationListItem style={{ color: '#00bcd4' }}>Brazil</LocationListItem>
        <LocationListItem style={{ color: '#4caf50' }}>Canada</LocationListItem>
        <LocationListItem style={{ color: '#f44336' }}>China</LocationListItem>
        <LocationListItem style={{ color: '#9c27b0' }}>France</LocationListItem>
        <LocationListItem style={{ color: '#ff9f00' }}>Austrilia</LocationListItem>
        <LocationListItem style={{ color: '#00bcd4' }}>Neatherland</LocationListItem>
        <LocationListItem style={{ color: '#4caf50' }}>UnitedStats</LocationListItem>
        <LocationListItem style={{ color: '#f44336' }}>UAE</LocationListItem>
        <LocationListItem style={{ color: '#9c27b0' }}>UK</LocationListItem>
      </LocationList>
      
      <p style={{color:'cyan'}}>&copy; 2023 Your Finance Management System. All rights reserved.</p>
    </FooterContainer>
  );
}
