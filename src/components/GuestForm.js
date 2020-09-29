//Keeps track of our state
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function GuestForm({ addGuest }) {
  const [guest, setGuest] = useState({
    id: '',
    task: '',
    attending: false,
  });

  function handleTaskInputChange(e) {
    setGuest({ ...guest, task: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (guest.task.trim()) {
      addGuest({ ...guest, id: uuidv4() });
      // reset task input
      setGuest({ ...guest, task: '' });
    }
  }
  return (
    <form onSubmit={handleSubmit} className="guest-form">
      <input
        onChange={handleTaskInputChange}
        placeholder="First Name"
        type="text"
        value={guest.task}
        name="FirstName"
      />
      <input placeholder="Last Name" type="text" />
      <button type="submit">submit</button>
    </form>
  );
}

export default GuestForm;
