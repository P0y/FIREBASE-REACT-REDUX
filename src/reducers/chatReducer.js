import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function chatReducer(state = initialState.chat, action) {
  switch (action.type) {
    case types.MESSAGE_SEND_SUCCESS:
      return Object.assign({}, state, action);
    default:
      return state;
  }
}
