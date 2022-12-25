import { mockChatRoom, mockChatMessage } from "../_helpers/mockObjects";
import { resetActiveRoom, sendMessage, setActiveRoom } from './actions';

const initialState = {
  activeRoom: null,
  list: [
    mockChatRoom(),
    mockChatRoom(),
    mockChatRoom(),
    mockChatRoom(),
    mockChatRoom()
  ],
};

export function chatRoomsReducer(state = initialState, action) {
  switch (action.type) {
    case setActiveRoom.TYPE:
      return {
        ...state,
        activeRoom: action.payload,
      };

    case resetActiveRoom.TYPE:
      return {
        ...state,
        activeRoom: null,
      };

    case sendMessage.TYPE:
      return {
        ...state,
        list: state.list.map(room => {
          if (room.id === state.activeRoom) {
            return {
              ...room,
              messages: [
                ...room.messages,
                mockChatMessage({ message: action.payload }),
              ],
            };
          }

          return room;
        })
      }

    default:
      return state;
  }
}
