// Checkbox.jsx
import React from 'react';

function Checkbox({ label, checked, onChange }) {
  return (
    <div className="checkbox-container">
      <input className="checkbox-input" type="checkbox" checked={checked} onChange={onChange} />
      <label className="checkbox-label">{label}</label>
    </div>
  );
}

export default Checkbox;
