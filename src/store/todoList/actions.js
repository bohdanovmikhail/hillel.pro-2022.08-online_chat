import { createPayloadAction } from "../_helpers";

export const todoListAdd = createPayloadAction("todoList.add");
export const todoListToggle = createPayloadAction("todoList.toggle");
export const todoListDelete = createPayloadAction("todoList.delete");

// todoListAdd('data'); // { type: "todoList.add", payload: "data" }
// todoListAdd.TYPE; // "todoList.add"
// todoListDelete.TYPE; // "todoList.delete"
