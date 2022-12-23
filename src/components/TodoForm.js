import { useState } from "react";

export function TodoForm({ onAdd }) {
  const [value, setValue] = useState("");

  const addClickHandler = () => {
    if (!value) {
      return;
    }

    onAdd(value);
    setValue("");
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            addClickHandler();
          }
        }}
      />

      <button onClick={addClickHandler}>Add item</button>
    </div>
  );
}
