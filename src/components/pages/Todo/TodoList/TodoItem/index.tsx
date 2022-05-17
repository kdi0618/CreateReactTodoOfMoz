import React from "react";
import { Button } from '../../../../common/Button/index';
import './index.css';
import { Todo } from '../../../../../type/todo';

export const TodoItem: React.FC<Todo> = (props) => {
  return (
    <li className="todoItem">
      <label className="checkboxArea">
        <input type="checkbox" />
        {props.title}
      </label>
      <div className="editTodoButtonWrapper">
        <Button title={`Edit ${props.title}`} />
        <Button title={`Delete ${props.title}`} />
      </div>
    </li>
  );
}
