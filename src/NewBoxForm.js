import React, { useState } from 'react';

function NewBoxForm({ addBox }) {
  const INITIAL_STATE = { backgroundColor: "", width: "", height: "" }
  //state
  const [form, setForm] = useState(INITIAL_STATE)

  //handleSubmit
  const handleSubmit = e => {
    e.preventDefault();
    addBox(form);
    //reset to empty form
    setForm(INITIAL_STATE);
  };

  //handleChange
  const handleChange = e => {
    const { name, value } = e.target;
    setForm(form => ({
      ...form,
      [name]: value
    }));
  };

  return (
    <form className="NewBoxForm" onSubmit={handleSubmit}>
      <label htmlFor="backgroundColor">Background Color: </label>
      <input
        id="backgroundColor"
        name="backgroundColor"
        value={form.backgroundColor}
        onChange={handleChange}
      />

      <label htmlFor="width">Width: </label>
      <input
        id="width"
        name="width"
        value={form.width}
        onChange={handleChange}
      />

      <label htmlFor="height">Height: </label>
      <input
        id="height"
        name="height"
        value={form.height}
        onChange={handleChange}
      />
      <button className="NewBoxForm-button">Add new box</button>
    </form>
  );
};

export default NewBoxForm;
