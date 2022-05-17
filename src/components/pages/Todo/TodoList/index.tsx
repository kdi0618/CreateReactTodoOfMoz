import React from "react";
import { TodoItem } from './TodoItem/index';

export const TodoList: React.FC = () => {
  const todosData = [
    {
      title: 'Eat'
    },
    {
      title: 'Sleep'
    },
    {
      title: 'Repeat'
    },
  ];

  return (
    <ul>
      {
        todosData.map((todoData) =>
          <TodoItem title={todoData.title} />
        )
      }
    </ul>
  );
};