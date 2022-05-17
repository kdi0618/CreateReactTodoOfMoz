import React from 'react';
import { DisplyTodoController } from "./DisplayTodoController/index";
import './index.css';

export const DisplyTodoControllers: React.FC = () => {
  const todoStateTypes = [
    {
      text: 'Show all tasks'
    },
    {
      text: 'Show active tasks'
    },
    {
      text: 'Show completed tasks'
    }
  ];

  return (
    <ul className="controlButtons">
      {
        todoStateTypes.map((todo) =>
          <DisplyTodoController text={todo.text} />
        )
        }
    </ul>
  );
};
