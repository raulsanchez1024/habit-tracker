import React, { useState } from 'react';
import './App.css';
import uuid from 'uuid/v4';
import HabitList from './components/HabitList';

export default function App() {
  // initialize items to empty array
  // const [items, setItems] = useState([]);
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || []);
  // initialize text to empty string
  const [text, setText] = useState('');
  // const getItems = JSON.parse(localStorage.getItem('items'));

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
    localStorage.setItem('items', JSON.stringify(items));
    // getItems = JSON.parse(localStorage.getItem('items'));
  }

  function markItemCompleted(itemId) {
    const updatedItems = items.map((item) => {
      if (itemId === item.id) {
        // eslint-disable-next-line no-param-reassign
        item.done = !item.done;
      }

      return item;
    });

    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(items));
    // getItems = JSON.parse(localStorage.getItem('items'));
  }

  function handleDeleteItem(itemId) {
    const updatedItems = items.filter(item => item.id !== itemId);
    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
    // getItems = JSON.parse(localStorage.getItem('items'));
  }

  return (
    <div className="App">
      <div className="habit-container">
        <h2>Daily Habit Tracker</h2>
        <HabitList
          items={items}
          onItemCompleted={markItemCompleted}
          onDeleteItem={handleDeleteItem}
        />
        <div className="habit-form">
          <input
            type="text"
            onChange={e => setText(e.target.value)}
            value={text}
            id="habit-input"
            placeholder="Read three articles"
          />
          <input
            type="submit"
            onClick={handleAddItem}
            id="habit-btn"
            value="Add Habit"
          />
        </div>
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

/*
  what is happening? So far, everytime I hit add habit it will add
  but you have to click twice. Next, it will clear the array. I figured
  it was something to do with const [] = useState([])
*/
