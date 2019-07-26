import React from 'react';
import PropTypes from 'prop-types';

export default function HabitItem({
  onItemCompleted, onDeleteItem, id, text, completed,
}) {
  function markCompleted() {
    onItemCompleted(id);
  }

  function deleteItem() {
    onDeleteItem(id);
  }

  const itemClass = completed ? 'done habititem text' : 'undone text';

  return (
    <li>
      <input
        type="checkbox"
        onChange={markCompleted}
        className="habit-checkbox"
      />
      <label className={itemClass}>{text}</label>
      <button className="delete-btn undone" onClick={deleteItem} type="button">
        x
      </button>
    </li>
  );
}

HabitItem.prototype = {
  onItemCompleted: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};


// <li className={itemClass}>
//   <label className="text">
//     <input
//       type="checkbox"
//       onChange={markCompleted}
//       className="habit-checkbox"
//     />
//     <p>{text}</p>
//     <button className="delete-btn" onClick={deleteItem}>
//       x
//     </button>
//   </label>
// </li>;
