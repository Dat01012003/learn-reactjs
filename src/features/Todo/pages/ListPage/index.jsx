import React from "react";
import TodoList from "../../components/Todolist";

ListPage.propTypes = {};

function ListPage(props) {
  const todoList = [
    {
      id: 1,
      title: "Eat",
    },
    {
      id: 2,
      title: "Sleep",
    },
    {
      id: 3,
      title: "code",
    },
  ];

  return (
    <div>
      <h3>Todo list</h3>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default ListPage;
