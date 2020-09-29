//to render out the guests
import React from 'react';

function GuestList({ guests, toggleAttending, removeGuest }) {
  return (
    <ul>
      {guests.map((guest) => (
        <guests
          key={guest.id}
          guest={guest}
          toggleAttending={toggleAttending}
          removeGuest={removeGuest}
        />
      ))}
    </ul>
  );
}

export default GuestList;
