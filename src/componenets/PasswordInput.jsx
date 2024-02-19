// PasswordInput.jsx
import React from 'react';
import CopySVG from '../assets/copy-icon1.svg'; // Import the SVG file

function PasswordInput({ password, onCopy }) {
  return (
    <div className="password-container">
      <input className="password-input" type="text" value={password} readOnly />
      <button className="copy-button" onClick={onCopy}>
        <img src={CopySVG} alt="Copy" /> {/* Use the SVG component */}
      </button>
    </div>
  );
}

export default PasswordInput;
