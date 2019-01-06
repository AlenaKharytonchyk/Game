import { combineReducers} from 'redux';
import appReducer from './appReducer';
import userLoginReducer from './userLoginReducer';
import gameReducer from './gameReducer';
import scoreBoardReducer from './scoreBoardReducer'


export default combineReducers ({
    appReducer, userLoginReducer,  gameReducer, scoreBoardReducer,
})
