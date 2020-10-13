import {APP_SHOW_ALERT, APP_HIDE_ALERT} from "./types";

export function showAlert(message, type = "error") {
  return {
    type: APP_SHOW_ALERT,
    payload: {
      message,
      type
    }
  }
}

export function hideAlert() {
  return {
    type: APP_HIDE_ALERT
  }
}