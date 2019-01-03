import { appActions } from "../actions";

const initialState = {
  gameName: "any name",
  clickCounter: 0
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case appActions.APP_CLICK:
      return Object.assign({}, state, {
        clickCounter: state.clickCounter + action.value
      });

    default:
      return state;
  }
}

export default appReducer;
