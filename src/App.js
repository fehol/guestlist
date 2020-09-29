import React, { useState, useEffect } from 'react';
import GuestForm from './components/GuestForm';
import GuestList from './components/GuestList';

const LOCAL_STORAGE_KEY = 'react-guest-list';

function App() {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    const storageGuestList = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY),
    );
    if (storageGuestList) {
      setGuests(storageGuestList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(guests));
  }, [guests]);

  function addGuest(guest) {
    setGuests([guest, ...guests]);
  }
  function toggleAttending(id) {
    setGuests(
      guests.map((guest) => {
        if (guest.id === id) {
          return {
            ...guest,
            completed: !guest.completed,
          };
        }
        return guest;
      }),
    );
  }
  function removeGuest(id) {
    setGuests(guests.filter((guest) => guest.id !== id));
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Guestlist</h1>
        <GuestForm addGuest={addGuest} />
        <GuestList
          guests={guests}
          toggleAttending={toggleAttending}
          removeGuest={removeGuest}
        />
      </header>
    </div>
  );
}

export default App;
