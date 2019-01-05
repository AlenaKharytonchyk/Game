import { gameActions } from "../actions";

const initialState = {
  userHealth: 0,
  monsterHealth: 0,
  totalScore: 0
};
function gameReducer(state = initialState, action) {
  switch (action.type) {
    case gameActions.GAME_START:
      return Object.assign({}, state, {
        userHealth: action.userHealth,
        monsterHealth: action.monsterHealth
      });
    case gameActions.GAME_END:
      return state;
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
        monsterHealth: state.monsterHealth - action.value
      });
    case gameActions.USER_HEAL:
      return Object.assign({}, state, {
        userHealth: state.userHealth + action.value
      });
    case gameActions.USER_EXIT:
      return state;

    default:
      return state;

  }
}

export default gameReducer;
