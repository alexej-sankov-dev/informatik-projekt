import _ from 'lodash'
import { FETCH_CITIES, GUESS_RIGHT, GUESS_WRONG, NEW_GAME } from '../actions/types'


const INITIAL_STATE = {
    score: 0,
    cities: null,
    guessCheck: null
}

export default(state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_CITIES:
            return {...state, cities: action.payload}
        case GUESS_RIGHT:
            return {...state, score: state.score +1, guessCheck: true}
        case GUESS_WRONG:
            return {...state, guessCheck: false}
        case NEW_GAME:
            return INITIAL_STATE
        default:
            return state
    }
}