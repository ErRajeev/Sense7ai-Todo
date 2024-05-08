import React, { createContext, useState, useContext } from "react";

// package for random id
import { nanoid } from "nanoid";

export const todoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: nanoid(),
      title: "Tea",
      date: Date.now(),
    },
  ]);

  const addTodo = (todo) => {
    // console.log(todo);
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    let newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };

  const editTodo = ({ id, title, date }) => {
    // console.log(id, title, date);
    const newTodo = {
      id: nanoid(),
      title: title,
      date: date,
    };
    const oldTodo = todos.filter((todo) => todo.id !== id);
    todos.pop({ id });
    setTodos([...oldTodo, newTodo]);
    // console.log(todos);
  };

  return (
    <>
      <todoContext.Provider
        value={{ todos, setTodos, addTodo, deleteTodo, editTodo }}
      >
        {children}
      </todoContext.Provider>
    </>
  );
};

//  this is a custom Hook
export const useTodo = () => useContext(todoContext);

export default TodoProvider;
