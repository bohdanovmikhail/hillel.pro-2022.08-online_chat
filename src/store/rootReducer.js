import { combineReducers } from "redux";

import { todoListReducer } from "./todoList/reducer";
import { REDUCER_KEY } from "./todoList/constants";
import { activeUserReducer } from "./activeUser/reducer";
import { chatRoomsReducer } from "./chatRooms/reducer";

export const rootReducer = combineReducers({
  [REDUCER_KEY]: todoListReducer,
  activeUser: activeUserReducer,
  chatRooms: chatRoomsReducer
});
