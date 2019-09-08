import * as types from './actionTypes';
import {ajaxCallError, beginAjaxCall} from "./ajaxStatusActions";
import firebaseApi from "../api/firebase";

export function savedMessage() {
  return {
    type: types.MESSAGE_SEND_SUCCESS
  };
}

export function chatAction(message, currentUserId) {
  let messageByUser = [];
  messageByUser.push({
    userId: currentUserId,
    message: message
  });
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return firebaseApi.databasePush('/message', messageByUser)
      .then(
        response => {
          dispatch(savedMessage());
        })
      .catch(
        error => {
          dispatch(ajaxCallError());
          // @TODO better error handling
          throw(error);
        });
  };
}
