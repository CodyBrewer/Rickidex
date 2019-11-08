import axios from 'axios';
import * as Types from './actionTypes';

export const fetchCharacters = () => dispatch => {
  dispatch({ type: Types.START_FETCHING });

  axios
    .get('https://rickandmortyapi.com/api/character')
    .then(res =>
      dispatch({ type: Types.FETCH_SUCCESS, payload: res.data.results })
    )
    .catch(error =>
      dispatch({ type: Types.FETCH_FAILURE, payload: error.response })
    );
};
