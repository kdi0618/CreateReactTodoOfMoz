import React from 'react';
import './index.css'

export const CreateTodo: React.FC = () => {
  return (
    <div>
      <input type="text" />
      <button className="addButton">Add</button>
    </div>
  );
};