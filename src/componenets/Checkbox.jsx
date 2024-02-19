import React from 'react';

function Checkbox({ label, checked, onChange }) {
  const checkboxId = `${label}-checkbox`; // Generate unique id for each checkbox

  return (
    <div className="checkbox-container">
      <input
        id={checkboxId}
        className="checkbox-input"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={checkboxId} className="checkbox-label">
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
