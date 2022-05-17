import React from 'react';
import { Button } from '../../../../common/Button/index';
import './index.css'
import { ShowController } from './type';

export const DisplayTodoController: React.FC<ShowController> = (props) => {
  return (
    <li className="controlButtonWrapper">
      <Button title={props.text} />
    </li>
  );
};
