import React, { useState } from 'react';

function GuestForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <form className="guest-form">
      <h1>Guestlist</h1>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <button className="submit-button">Add Guest</button>
    </form>
  );
}

export default GuestForm;
