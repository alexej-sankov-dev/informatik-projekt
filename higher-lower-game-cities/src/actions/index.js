import {GUESS_RIGHT, GUESS_WRONG, FETCH_CITIES, NEW_GAME, SIGN_IN, SIGN_OUT, SET_USER_DATA, UPDATE_HIGHSCORE, FETCH_LEADERBOARD} from './types'
import history from '../history'
import cities from '../apis/Cities'
import users from '../apis/Users'
import leaderboard from '../apis/Leaderboard'

export const fetchCities = () => async dispatch => {
    const response = await cities.get('/2items');
    dispatch({type: FETCH_CITIES, payload: response.data});
}

export const handleGuess = guessCheck => async dispatch => {
    const guessCheckType = guessCheck ? GUESS_RIGHT : GUESS_WRONG;
    dispatch({type: guessCheckType});
}

export const startNewGame = () => dispatch => {
    dispatch({type: NEW_GAME});
};

export const signIn = (userId) => async (dispatch) => {
    const response = await users.post('/signin');
    if(response.body.new) {
        dispatch({ type: SIGN_IN, payload: {userId, highscore: 0}});
        history.push('/userDataModal');
    } else {
        dispatch({ type: SIGN_IN, payload: {userId, username: response.body.username, highscore: response.body.highscore}});
        history.push('/');
    }
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const setUserData = (formValues) => async (dispatch, getState) => {
    const response = await users.post('/setUserData', {formValues, userId: getState().auth.userId});
    dispatch({type: SET_USER_DATA, payload: response.data});
    history.push('/home');
};

export const fetchLeaderboard = () => async dispatch => {
    const response = await leaderboard.get('/');
    dispatch({type: FETCH_LEADERBOARD, payload: response.data});
}

export const updateHighscore = (userId, highscore) => async (dispatch, getState) => {
    var response = null
    if(highscore > getState().auth.highscore) {
        response = await users.patch(`/updateHighScore`, {userId, highscore});
    }
    var response1 = null
    if(highscore > getState().leaderboard["length"].highscore) {
        response1 = await leaderboard.patch(`/`, {userId, highscore});

    }
    dispatch({type: UPDATE_HIGHSCORE, payload: {highscore: response, leaderboard: response1}});
};

