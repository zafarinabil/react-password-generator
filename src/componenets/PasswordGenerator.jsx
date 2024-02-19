// PasswordGenerator.jsx
import React, { useState } from 'react';
import StrengthMeter from './StrengthMeter';
import PasswordInput from './PasswordInput';
import Checkbox from './Checkbox';

function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(10);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecial, setIncludeSpecial] = useState(true);

  const handleGeneratePassword = () => {
    let charset = '';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charset += '0123456789';
    if (includeSpecial) charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    
    let generatedPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset.charAt(randomIndex);
    }
    setPassword(generatedPassword);
  };

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };

  return (
    <div className="main-container">
      <h1>Password Generator</h1>
      <PasswordInput password={password} onCopy={handleCopyPassword} />
      <div className="second-container">
        <div className="second">
          <div className="length">
            <label>Password Length: {passwordLength}</label>
            <input
              type="range"
              min="6"
              max="20"
              value={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
            />
          </div>
        </div>
        <div className="form">
          <Checkbox label="Include Uppercase" checked={includeUppercase} onChange={() => setIncludeUppercase(!includeUppercase)} />
          <Checkbox label="Include Lowercase" checked={includeLowercase} onChange={() => setIncludeLowercase(!includeLowercase)} />
          <Checkbox label="Include Numbers" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} />
          <Checkbox label="Include Special Characters" checked={includeSpecial} onChange={() => setIncludeSpecial(!includeSpecial)} />
          <button className='generate-button' onClick={handleGeneratePassword}>Generate</button>
          <StrengthMeter password={password} />
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
