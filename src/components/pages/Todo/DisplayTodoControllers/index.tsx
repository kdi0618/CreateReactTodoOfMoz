import React from 'react';
import { DisplayTodoController } from "./DisplayTodoController/index";
import './index.css';

export const DisplayTodoControllers: React.FC = () => {
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
          <DisplayTodoController text={todo.text} />
        )
        }
    </ul>
  );
};
