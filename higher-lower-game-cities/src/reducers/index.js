import { combineReducers } from 'redux';
import { reducer as forms} from 'redux-form'

import gameReducer from './gameReducer'
import authReducer from './authReducer'

export default combineReducers({
    game: gameReducer, 
    auth: authReducer,
    form: forms
});

