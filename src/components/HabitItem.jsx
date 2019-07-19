import React from 'react';

export default function HabitItem({
  onItemCompleted, onDeleteItem, id, text, completed,
}) {
  function markCompleted() {
    onItemCompleted(id);
  }

  function deleteItem() {
    onDeleteItem(id);
  }

  const itemClass = completed ? 'done' : 'undone';

  return (
    <li className={itemClass}>
      <label className="text">
        <input type="checkbox" onChange={markCompleted} />
        {text}
        <button onClick={deleteItem}>x</button>
      </label>
    </li>
  );
}
