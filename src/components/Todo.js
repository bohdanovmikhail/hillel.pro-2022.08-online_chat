import { connect } from "react-redux";

import {
  todoListAdd,
  todoListToggle,
  todoListDelete,
  selectTodoList
} from "../store/todoList";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoFilter } from "./TodoFilter";

function TodoView({ items, add, toggle, remove, revert, repeat }) {
  return (
    <div className="App">
      <TodoForm onAdd={add} />
      {/* <TodoForm onAdd={(text) => addItem(text)} /> */}
      <TodoFilter />
      <TodoList list={items} onToggle={toggle} onDelete={remove} />
    </div>
  );
}

const mapState = (state) => ({
  items: selectTodoList(state)
});

const mapDispatch = (dispatch) => ({
  add: (text) => dispatch(todoListAdd(text)),
  toggle: (item) => dispatch(todoListToggle(item)),
  remove: (item) => dispatch(todoListDelete(item))
});

export const Todo = connect(mapState, mapDispatch)(TodoView);
