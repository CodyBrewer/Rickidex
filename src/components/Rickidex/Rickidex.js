import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ClimbingBoxLoader } from "react-redux";
import Character from "../Characters/Character";
import { fetchCharacters } from "../../store/actions";
import styled from "styled-components";
import {}

import { device } from "../../constants";

const OuterDiv = styled.div`
  margin-top: 10vh;
  height: 60vh;
  width: 60vw;
  background: #b7e4f9ff;
  display: flex;
`;

const ImageContainerDiv = styled.div`
  width: 35%;
  height:
  margin: 0.5rem;
  background: #000;

  // @media (max-width: 375px) {
  @media ${device.mobileL} {
    width: 50%;
  }
`;

const DetailsContainerDiv = styled.div`
  background: pink;
  height: 50%;
  width: 100%;
  margin: 1rem auto;
`;

const Arrow = styled.div`
  width: 0;
  height: 0;
`;

const ArrowUp = styled(Arrow)`
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;

  border-bottom: 5px solid black;
`;

const ArrowDown = styled(Arrow)`
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;

  border-top: 20px solid #f00;
`;

const ArrowRight = styled(Arrow)`
  border-top: 60px solid transparent;
  border-bottom: 60px solid transparent;

  border-left: 60px solid green;
`;

const ArrowLeft = styled(Arrow)`
  border-top: 60px solid transparent;
  border-bottom: 60px solid transparent;

  border-right: 60px solid blue;
`;

const Quiver = styled.div`
  align-self: flex-end;
  margin: 1rem;
`;

const DataContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
`;

const Rickidex = props => {
  const { fetchCharacters, characters, isFetching, error } = props;

  useEffect(() => {
    fetchCharacters();
  }, []);

  console.log(characters);

  return (
    <OuterDiv>
      <Quiver>
        <ArrowLeft />
      </Quiver>
      <DataContainer>
        <ImageContainerDiv></ImageContainerDiv>
        <DetailsContainerDiv></DetailsContainerDiv>
      </DataContainer>
      <Quiver>
        <ArrowRight />
      </Quiver>
    </OuterDiv>
  );
};

const mapStateToPorps = state => ({
  characters: state.characters.characters,
  isFetching: state.characters.isFetching,
  error: ""
});

const mapDispatchToProps = {
  fetchCharacters
};

export default connect(mapStateToPorps, mapDispatchToProps)(Rickidex);
