import { FETCH_LEADERBOARD, UPDATE_HIGHSCORE} from "../actions/types";

const INITIAL_STATE = {};

export default (state= INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_LEADERBOARD:
            return action.payload
        case UPDATE_HIGHSCORE:
            if(action.payload.leaderboard != null) {
                return action.payload.leaderboard
            } else {
                return state
            } 
        default:
            return state;
    }
};