import React from "react";
import AddTodo from "./components/AddTodo";
import TodoProvider from "./components/context/todoContext";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <TodoProvider>
        <AddTodo />
        <TodoList />
      </TodoProvider>
    </>
  );
}

export default App;
