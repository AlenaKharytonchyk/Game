export const CANCEL_DIALOG = "CANCEL_DIALOG";
export const SUBMIT_DIALOG = "SUBMIT_DIALOG";
export const OPEN_DIALOG = "OPEN_DIALOG";

export function openDialog() {
  return { type: OPEN_DIALOG };
}

export function cancelDialog() {
  return { type: CANCEL_DIALOG };
}

export function submitDialog(userName) {
  return { type: SUBMIT_DIALOG, value: userName };
}
