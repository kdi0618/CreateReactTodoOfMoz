import React from "react";
import './App.css'
import { TopHeader } from "./TopHeader/index";
import { SectionTitle } from "./SectionTitle/index";
import { CreateTodo } from "./CreateTodo/index";
import { DisplayTodoControllers } from "./DisplayTodoControllers/index";
import { TodoList } from "./TodoList/index";

const App: React.FC = () => {
  return (
    <div className="todoSection">
      <TopHeader />
      <SectionTitle text="What needs to be done?" />
      <CreateTodo />
      <DisplayTodoControllers />
      <SectionTitle text="3 tasks remaining" />
      <TodoList />
    </div>
  );
}

export { App };
