import { combineReducers} from 'redux';
import appReducer from './appReducer';
import userLoginReducer from './userLoginReducer';


export default combineReducers ({
    appReducer, userLoginReducer
})
