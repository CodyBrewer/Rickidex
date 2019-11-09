// import React from 'react';
import styled from 'styled-components';
export const CenterApp = styled.div`
    margin: 0 auto
    display: flex;
    flex-flow: column wrap;
    align-items: center;
`;

export const Header = styled.h1`
  font-size: 2rem;
  margin: 1rem;
  0 @media (max-width: 375px) {
    font-size: 1.5rem;
  }
`;

export const CharacterGrid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-auto-rows: 15rem;
  @media (max-width: 375px) {
    grid-template-columns: 100%;
    grid-auto-rows: 15rem;
  }
`;

export const CharacterCard = styled.div`
  width: 80%
  height: 90%;
  display: flex;
  flex-flow: column wrap;
  margin: 1rem;
`;

export const AvatarImage = styled.img`
  width: 35%;
  margin: 0.5rem;

  @media (max-width: 375px) {
    width: 50%;
  }
`;
export const CharacterInfo = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: baseline;
  justify-content: baseline;
  width: 50%;
  padding-left: 1rem;
  h2 {
    font-size: 1rem;
    margin: 0.1rem;
  }
  p {
    font-size: 1rem;
    margin: 0.1rem;
  }
`;
