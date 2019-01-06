import { gameActions } from "../actions";
import { USER_ACTIONS } from "../components/GameScreen";

const initialState = {
  userHealth: 0,
  monsterHealth: 0,
  totalScore: 0,
  round: 0,
  userState: { userActionStatus: USER_ACTIONS.IDLE }
};

function gameReducer(state = initialState, action) {
  switch (action.type) {
    case gameActions.GAME_START:
      return Object.assign({}, state, {
        userHealth: action.userHealth,
        monsterHealth: action.monsterHealth
      });
    case gameActions.UPDATE_USER_STATE:
      return Object.assign({}, state, {
        userState: action.userState
      })
    case gameActions.MONSTER_APPEAR:
      return Object.assign({}, state, {
        totalScore: state.totalScore + action.score,
        monsterHealth: state.monsterHealth + action.monsterHealth
      });
    case gameActions.MONSTER_ATTACK:
      return Object.assign({}, state, {
        userHealth: state.userHealth - action.value
      });
    case gameActions.USER_ATTACK:
      return Object.assign({}, state, {
        monsterHealth: state.monsterHealth - action.value,
        round: state.round + 1,
        userState: initialState.userState,
      });
    case gameActions.USER_HEAL:
      return Object.assign({}, state, {
        userHealth: state.userHealth + action.value,
        round: state.round + 1,
        userState: initialState.userState,
      });
    case gameActions.GAME_END:
    case gameActions.USER_EXIT:
    default:
      return state;

  }
}

export default gameReducer;
