import React, { useState } from 'react';

function GuestListForm() {
  const [input, setInput] = useState('');

  const handleFirstName = (e) => {
    setInput(e.target.value);
  };

  const handleLastName = (e) => {
    setInput(e.target.value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();

    // props.onSubmit({
    //   id: Math.floor(Math.random() * 10000),
    //   text: input,
    // });

    setInput('');
  };

  return (
    <form ClassName="Firstname" onSubmit={handleSumbit}>
      <input
        type="text"
        placeholder="First Name"
        value={input}
        name="text"
        className="List-input"
        onChange={handleFirstName}
      />
      <form ClassName="Lastname" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Last Name"
          value={input}
          name="text"
          className="List-input"
        />
        <button className="Submit-button">SUBMIT</button>
      </div>
    </>
  );
}

export default GuestListForm;
