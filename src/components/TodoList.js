import { TodoItem } from "./TodoItem";

export function TodoList({ list, onToggle, onDelete }) {
  return (
    <div className="">
      {list.map((item, index) => (
        <div key={index}>
          <TodoItem item={item} onToggle={() => onToggle(item)} />
          <button onClick={() => onDelete(item)}>x</button>
        </div>
      ))}
    </div>
  );
}
