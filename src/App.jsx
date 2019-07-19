import React, { useState } from 'react';
import './App.css';
import uuid from 'uuid/v4';
import HabitList from './components/HabitList';

export default function App() {
  // initialize items to empty array
  const [items, setItems] = useState([]);
  // initialize text to emoty string
  const [text, setText] = useState('');

  function handleAddItem() {
    const newItem = {
      id: uuid(),
      text,
      done: false,
    };

    // Prevent adding an empty element to items
    if (text !== '') {
      setItems([...items, newItem]);
    }

    setText('');
    // localStorage.setItem('items', JSON.stringify(items));
  }

  function markItemCompleted(itemId) {
    const updatedItems = items.map((item) => {
      if (itemId === item.id) {
        item.done = !item.done;
      }

      return item;
    });

    setItems(updatedItems);
  }

  function handleDeleteItem(itemId) {
    const updatedItems = items.filter(item => item.id !== itemId);
    setItems(updatedItems);
  }

  return (
    <div className="App">
      <h3>Daily Habit Tracker</h3>
      <div>
        <HabitList
          items={items}
          onItemCompleted={markItemCompleted}
          onDeleteItem={handleDeleteItem}
        />
      </div>
      <div>
        <input
          type="text"
          onChange={e => setText(e.target.value)}
          value={text}
          id="habit-input"
          placeholder="Read three articles"
        />
        <input type="submit" onClick={handleAddItem} id="habit-btn" value="Add Habit" />
      </div>
      <div className="footer">
        <div id="made">
          Made with
          {' '}
          <span role="img" aria-label="Blue Heart">
            💙
          </span>
          {' '}
          in Denver, CO by
          {' '}
          <a href="https://twitter.com/rsanchezp">Raul S.</a>
        </div>
      </div>
    </div>
  );
}
