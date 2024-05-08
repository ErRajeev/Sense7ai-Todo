import React, { useState } from "react";
import { useTodo } from "./context/todoContext";
import { nanoid } from "nanoid";

function AddTodo() {
  const [todoTitle, setTodoTitle] = useState("");
  const handleTodoTitleChange = (e) => setTodoTitle(e.target.value);

  const { addTodo } = useTodo();

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    let todo = {
      id: nanoid(),
      title: todoTitle,
      date: Date.now() || null,
    };
    addTodo(todo);
  };

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col my-5">
            <form onSubmit={handleTodoSubmit} className="col-md-12 d-flex">
              <input
                className="form-control fs-3"
                type="text"
                value={todoTitle}
                onChange={handleTodoTitleChange}
                required
                placeholder="Please Add Todo.."
              />
              <button type="submit" className="btn btn-primary">
                Add Todo
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
