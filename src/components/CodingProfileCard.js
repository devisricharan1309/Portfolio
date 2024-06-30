// src/components/CodingProfileCard.js

import React from 'react';
import styled from 'styled-components';

const Card = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 12px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.cardBg};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  border-radius: 50%;
  margin-right: 12px;
`;

const PlatformName = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const CodingProfileCard = ({ platform, profileLink, img }) => {
  return (
    <Card href={profileLink} target="_blank" rel="noopener noreferrer">
      <ProfileImg src={img} alt={`${platform} Logo`} />
      <PlatformName>{platform}</PlatformName>
    </Card>
  );
};

export default CodingProfileCard;
