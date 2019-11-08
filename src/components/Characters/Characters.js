import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ClimbingBoxLoader } from 'react-spinners';
import Character from './Character';
import { fetchCharacters } from '../../store/actions';
import { CharacterGrid } from '../Styles';

const Characters = props => {
  const { fetchCharacters, characters, isFetching, error } = props;

  useEffect(() => {
    fetchCharacters();
  }, []);
  return (
    <>
      {isFetching ? (
        <ClimbingBoxLoader />
      ) : (
        <>
          <CharacterGrid>
            {error && <p>{props.error}</p>}
            {characters.map(character => (
              <Character key={character.id} character={character} />
            ))}
          </CharacterGrid>
        </>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  characters: state.characters.characters,
  isFetching: state.characters.isFetching,
  error: ''
});

const mapDispatchToProps = {
  fetchCharacters
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Characters);
