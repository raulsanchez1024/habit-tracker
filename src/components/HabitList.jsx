import React from 'react';
import HabitItem from './HabitItem';

export default function HabitList({ items, onItemCompleted, onDeleteItem }) {
  return (
    <ul>
      {items.map(item => (
        <HabitItem
          key={item.id}
          id={item.id}
          text={item.text}
          completed={item.done}
          onItemCompleted={onItemCompleted}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </ul>
  );
}
