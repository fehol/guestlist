/** @jsx jsx */
/** @jsxFrag React.Fragment */

import React, { useEffect, useState, Component } from 'react';
import './App.css';
import { jsx, css } from '@emotion/core';
import GuestListForm from './components/GuestListForm';

<<<<<<< HEAD
export default function App() {
  return (
    <>
      {' '}
      <header>
        <div class="container">
          <div class="neon">Guest </div>
          <div class="flux">List</div>
        </div>
      </header>
      <main>
        <div className="List-app">
          <GuestListForm />
        </div>
      </main>
    </>
  );
=======
const baseUrl = 'http://localhost:5000';

const response = await fetch(`${baseUrl}/`);
const allGuests = await response.json();

function App() {
  return <div className="App"></div>;
>>>>>>> a0eddfa88c638b327380c507bc3b5bbb071de027
}
