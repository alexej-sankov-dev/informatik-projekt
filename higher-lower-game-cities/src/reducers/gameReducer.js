import _ from 'lodash'
import { FETCH_CITIES, GUESS_RIGHT, GUESS_WRONG, NEW_GAME, NEW_ROUND } from '../actions/types'

const data = {"0":{"id":1,"name":"Moskau","country":"Russland","population":11503501,"image":"https://i.pinimg.com/736x/cd/39/ba/cd39bab23c930963d14dbab0f396f341.jpg"},"1":{"id":2,"name":"Berlin","country":"Germany","population":6117535,"image":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Siegessaeule_Aussicht_10-13_img4_Tiergarten.jpg/1920px-Siegessaeule_Aussicht_10-13_img4_Tiergarten.jpg"}}

const INITIAL_STATE = {
    score: 0,
    cities: data,
    roundState: null
}

export default(state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GUESS_RIGHT:
            return {...state, score: state.score +1, roundState: "true"}
        case GUESS_WRONG:
            return {...state, roundState: "false"}
        case FETCH_CITIES:
            return {...state, cities: action.payload, roundState: null}
        case NEW_GAME:
            return INITIAL_STATE
        default:
            return state
    }
}