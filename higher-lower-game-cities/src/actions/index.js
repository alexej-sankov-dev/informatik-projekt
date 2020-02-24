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
    const response = await users.get(`/signIn?userId=${userId}`, userId);
    if(response.data.new) {
        dispatch({ type: SIGN_IN, payload: {userId, highscore: 0}});
        history.push('/userDataModal');
    } else {
        
        dispatch({ type: SIGN_IN, payload: {userId, username: response.data.username, highscore: response.data.highscore}});
    }
    
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const setUserData = (formValues) => async (dispatch, getState) => {
    const response = await users.put('/setUserData', {username: formValues.username, userId: getState().auth.userId});
    dispatch({type: SET_USER_DATA, payload: response.data});
    history.push('/');
};

export const fetchLeaderboard = () => async dispatch => {
    const response = await leaderboard.get('/');
    dispatch({type: FETCH_LEADERBOARD, payload: response.data});
}

export const updateHighscore = (userId, highscore) => async (dispatch, getState) => {
    var payload = null
    if(highscore > getState().auth.highscore) {
        var response = await users.put(`/updateHighScore`, {userId: getState().auth.userId, highscore});
        payload = {highscore: response.data.highscore};

    }
    
    var response1 = null
    console.log(getState().leaderboard)
    if(highscore > getState().leaderboard["5"].score) {
        console.log('update leaderboard')
        console.log('payload before: '+payload)
        response1 = await leaderboard.put(`/updateHighScore`, {userId, highscore});
        payload = {...payload, leaderboard: response1.data}
        console.log(payload)
    }
    if(payload != null) {
        dispatch({type: UPDATE_HIGHSCORE, payload: payload});
    }
    
};

