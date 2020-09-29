// Renders a guest objects and handles its actions
import React from 'react';

function Guests({ guest, toggleAttending, removeGuest }) {
  function handleCheckboxClick() {
    toggleAttending(guest.id);
  }
  function handleRemoveClick() {
    removeGuest(guest.id);
  }

  return (
    <div style={{ display: 'flex' }}>
      <input type="checkbox" onClick={handleCheckboxClick} />
      <li
        style={{
          color: 'white',
          textDecoration: guest.completed ? 'line-through' : null,
        }}
      >
        {guest.task}
      </li>
      <button onClick={handleRemoveClick}>X</button>
    </div>
  );
}

export default Guests;
