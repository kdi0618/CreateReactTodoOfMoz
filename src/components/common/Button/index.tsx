import React from 'react';
import './index.css'
import { ButtonType } from './type';

export const Button: React.FC<ButtonType> = (props) => {
  return (
    <button className="buttonGeneral">{props.title}</button>
  );
};
