import {SIGN_IN, SIGN_OUT, SET_USER_DATA, UPDATE_HIGHSCORE} from "../actions/types";

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null,
    highscore: 0,
    username: null
};

export default (state= INITIAL_STATE, action) => {
    switch(action.type) {
        case SIGN_IN:
            return {...state, isSignedIn: true, userId: action.payload.userId, highscore: action.payload.highscore, username: action.payload.username};
        case SIGN_OUT:
            return {...state, isSignedIn: false, userId: null};
        case SET_USER_DATA:
            return {...state, username: action.payload}
        case UPDATE_HIGHSCORE:
            if(action.payload.highscore != null) {
                return {...state, highscore: action.payload.highscore}
            } else {
                return state
            }
        default:
            return state;
    }
};