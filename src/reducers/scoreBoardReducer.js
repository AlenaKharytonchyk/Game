import { gameActions } from "../actions";

const initialState = {scoreBoard: []};

function scoreBoardReducer(state=initialState, action) {
  switch (action.type) {
    case gameActions.GAME_END:
      const scoreBoard = [...state.scoreBoard];
      const {userName, score} = action;
      scoreBoard.push({userName, score})
      return Object.assign({}, state, {
        scoreBoard
      })


    default: return state;

  }
}

export default scoreBoardReducer;
