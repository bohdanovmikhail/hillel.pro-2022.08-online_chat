export function TodoItem({ item, onToggle }) {
  return (
    <div>
      <input type="checkbox" checked={item.done} onClick={onToggle} />
      {item.text}
    </div>
  );
}
