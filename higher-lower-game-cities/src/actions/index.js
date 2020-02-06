import {GUESS_RIGHT, GUESS_WRONG, FETCH_CITIES, NEW_GAME, NEW_ROUND} from './types'
import history from '../history'
import cities from '../apis/Cities'

export const fetchCities = () => async dispatch => {
    console.log('fetch cities')
    const response = await cities.get('/2items');
    console.log('response: '+JSON.stringify(response.data))
    dispatch({type: FETCH_CITIES, payload: response.data});
}

export const handleGuess = guessCheck => async dispatch => {
    const guessCheckType = guessCheck ? GUESS_RIGHT : GUESS_WRONG;
    dispatch({type: guessCheckType});
}

export const startNewGame = () => dispatch => {
    dispatch({type: NEW_GAME});
};
