import {loginActions} from '../actions'

const initialState = {
  showUserDialog: false,
  userName: undefined
}

function userLoginReducer(state = initialState, action) {
  switch (action.type) {
    case loginActions.OPEN_DIALOG:
      return Object.assign({}, state, {showUserDialog: true})
    case loginActions.CANCEL_DIALOG:
      return initialState;
    case loginActions.SUBMIT_DIALOG:
      return Object.assign({}, state, {showUserDialog: false, userName: action.value})
    default:
    return state;

  }
}
 export default userLoginReducer;
