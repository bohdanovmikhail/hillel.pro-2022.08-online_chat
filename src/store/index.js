import { createStore, compose, applyMiddleware } from "redux";
import persistState from "redux-localstorage";
import logger from "redux-logger";

import { rootReducer } from "./rootReducer";
import { todoListAdd } from "./todoList";

const enhancer = compose(applyMiddleware(logger)/*, persistState()*/);
export const store = createStore(rootReducer, enhancer);

const id = setInterval(() => {
  const length = store.getState().todoList.length;

  if (length > 10) {
    clearInterval(id);
  }

  store.dispatch(todoListAdd(Math.random()));
}, 5000);
