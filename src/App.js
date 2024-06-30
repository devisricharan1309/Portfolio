import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './utils/Themes';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { codingProfiles } from './data/constants'; // Import codingProfiles from constants
import Experience from './components/Experience';
import Education from './components/Education';
import ProjectDetails from './components/ProjectDetails';
import styled from 'styled-components';
import CodingProfileCard from './components/CodingProfileCard';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%),
    linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
  padding: 80px 0; /* Adjust padding as needed */
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 24px;
  font-size: 24px;
  color: ${({ theme }) => theme.text_primary};
`;

const ProfilesContainer = styled.div`
  display: flex;
  flex-direction: column; /* Display profiles in a column */
  align-items: center; /* Center align profiles horizontally */
  gap: 16px; /* Spacing between profiles */
`;

function App() {
  const [darkMode] = useState(true); // Removed setDarkMode if not used
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <HeroSection />
          <About /> {/* Render the About section */}
          <Wrapper>
            <SectionTitle>Coding Profiles</SectionTitle>
            <ProfilesContainer>
              {codingProfiles.map((profile, index) => (
                <CodingProfileCard key={index} platform={profile.platform} profileLink={profile.profileLink} img={profile.img} />
              ))}
            </ProfilesContainer>
          </Wrapper>
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state && <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
