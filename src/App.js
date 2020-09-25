/** @jsx jsx */
/** @jsxFrag React.Fragment */

import React, { useEffect, useState, Component } from 'react';
import './App.css';
import { jsx, css } from '@emotion/core';
import GuestListForm from './components/GuestListForm';

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
}
