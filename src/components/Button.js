import React from 'react';
import './Button.css';

const Button = ({ label, onClick, variant = 'primary' }) => {
  return (
    <button className={`button ${variant}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
