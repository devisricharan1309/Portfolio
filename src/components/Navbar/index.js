// src/components/Navbar/index.js

import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../utils/Themes'; // Update path as necessary
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants'; // Assuming Bio contains your profile links
import { Close } from '@mui/icons-material'; // Adjust icon imports as needed
import { useTheme } from 'styled-components';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavItems,
  NavLink,
  MobileIcon,
  MobileMenu,
  MobileLink,
  GitHubButton,
} from './NavbarStyledComponent'; // Update path to your styled components

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <a style={{ display: "flex", alignItems: "center", color: "white", textDecoration: "none", cursor: 'pointer' }}>
              <DiCssdeck size="3rem" /> <span style={{ marginLeft: '0.5rem' }}>Portfolio</span>
            </a>
          </NavLogo>
          <MobileIcon onClick={handleMenuToggle}>
            <FaBars />
          </MobileIcon>
          <NavItems>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#education">Education</NavLink>
          </NavItems>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
          {isOpen && (
            <MobileMenu>
              <MobileLink href="#about" onClick={handleMenuToggle}>About</MobileLink>
              <MobileLink href="#skills" onClick={handleMenuToggle}>Skills</MobileLink>
              <MobileLink href="#experience" onClick={handleMenuToggle}>Experience</MobileLink>
              <MobileLink href="#projects" onClick={handleMenuToggle}>Projects</MobileLink>
              <MobileLink href="#education" onClick={handleMenuToggle}>Education</MobileLink>
              <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
              <Close onClick={handleMenuToggle} />
            </MobileMenu>
          )}
        </NavbarContainer>
      </Nav>
    </ThemeProvider>
  );
};

export default Navbar;
