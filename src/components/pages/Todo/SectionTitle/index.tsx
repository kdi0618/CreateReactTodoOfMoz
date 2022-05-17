import React from 'react';
import { Title } from './type';

export const SectionTitle: React.FC<Title> = (props) => {
  return (
    <h2>{props.text}</h2>
  );
};