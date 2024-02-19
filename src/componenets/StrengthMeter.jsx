// StrengthMeter.jsx
import React from "react";

function StrengthMeter({ password }) {
  const calculatePasswordStrength = (password) => {
    let strength = "Weak";
    if (
      password.length >= 8 &&
      /[a-z]/.test(password) &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[^A-Za-z0-9]/.test(password)
    ) {
      strength = "Very Strong";
    } else if (
      password.length >= 8 &&
      ((/[a-z]/.test(password) && /[A-Z]/.test(password)) ||
        (/[a-z]/.test(password) && /[0-9]/.test(password)) ||
        (/[A-Z]/.test(password) && /[0-9]/.test(password)))
    ) {
      strength = "Strong";
    } else if (
      password.length >= 8 &&
      (/[a-z]/.test(password) ||
        /[A-Z]/.test(password) ||
        /[0-9]/.test(password))
    ) {
      strength = "Medium";
    }
    return strength;
  };

  return (
    <div className="strength-container">
      <label>Strength</label>
      <div className="strength-meter-container">
        <div className="strength-meter-text">
          {calculatePasswordStrength(password)}
        </div>
        <div
        className={`strength-meter ${calculatePasswordStrength(
          password
        ).toLowerCase()}`}
      ></div>
      </div>
    </div>
  );
}

export default StrengthMeter;
