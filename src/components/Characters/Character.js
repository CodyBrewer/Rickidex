import React from 'react';
import { AvatarImage, CharacterCard, CharacterInfo } from '../Styles';
import styled from 'styled-components';

const Character = props => {
  return (
    <CharacterCard>
      <AvatarImage src={props.character.image} alt={props.character.name} />
      <CharacterInfo>
        <h2>Name: {props.character.name}</h2>
        <p>Status: {props.character.status}</p>
        <p>Species: {props.character.species}</p>
        <p>Planet: {props.character.origin.name}</p>
      </CharacterInfo>
    </CharacterCard>
  );
};

export default Character;
