import { mockChatRoom } from "../_helpers/mockObjects";

const initialState = [
  mockChatRoom(),
  mockChatRoom()
];

export function chatRoomsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
