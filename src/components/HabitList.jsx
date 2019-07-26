import React, { useEffect } from 'react';
import HabitItem from './HabitItem';

export default function HabitList({ items, onItemCompleted, onDeleteItem }) {
  // useEffect -> am I doing this right?
  useEffect(() => () => {
    console.log('items changed...');
  }, [items]);

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

/*
  useEffect will have to be used here because
  the items array is being updated
*/
