import {GUESS_RIGHT, GUESS_WRONG, FETCH_CITIES, NEW_GAME} from './types'

import cities from '../apis/Cities'

export const fetchCities = () => async dispatch => {
    const response = await cities.get('/cities');
    dispatch({type: FETCH_CITIES, payload: response.data});
}

export const handleGuess = guessCheck => async dispatch => {
    const guessCheckType = guessCheck ? GUESS_RIGHT : GUESS_WRONG;
    dispatch({type: guessCheckType});
}

export const startNewGame = () => ({
    type: NEW_GAME
});