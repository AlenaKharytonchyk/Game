export const USER_ATTACK = "USER_ATTACK";
export const USER_HEAL = "USER_HEAL";
export const MONSTER_ATTACK = "MONSTER_ATTACK";
export const USER_EXIT = "USER_EXIT";
export const GAME_START = "GAME_START";
export const GAME_END = "GAME_END";
export const MONSTER_APPEAR = "MONSTER_APPEAR";
export const UPDATE_USER_STATE = "UPDATE_USER_STATE";

export function userAttack(value) {
  return { type: USER_ATTACK, value };
}
export function userHeal(value) {
  return { type: USER_HEAL, value };
}
export function monsterAttack(value) {
  return { type: MONSTER_ATTACK, value };
}
export function userExit() {
  return { type: USER_EXIT };
}
export function gameStart(userHealth, monsterHealth) {
  return { type: GAME_START, userHealth, monsterHealth };
}
export function gameEnd(userName, score) {
  return { type: GAME_END, userName, score };
}
export function monsterAppear(score, monsterHealth) {
  return { type: MONSTER_APPEAR, score, monsterHealth };
}

export function updateUserState(newUserState) {
  return { type: UPDATE_USER_STATE, userState: newUserState };
}
