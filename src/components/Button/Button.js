import React from 'react';
import './Button.scss';

export default function Button({ text, onClick }) {
  return <button onClick={onClick} className='ezui-btn'>{text}</button>;
}