import React from "react";
import TodoList from "../../components/Todolist";
import TodoForm from "../../components/Todoform";

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
  const handleTodoFormSubmit = (values) => {
    console.log("Form submit", values);
  };
  return (
    <div>
      <h3>what todo</h3>
      <TodoForm onsubmit={handleTodoFormSubmit} />
      <h3>Todo list</h3>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default ListPage;
