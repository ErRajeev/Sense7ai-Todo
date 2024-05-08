import React, { useRef, useState } from "react";
import { useTodo } from "./context/todoContext";

function TodoList() {
  const [todoTitle, setTodoTitle] = useState("");
  const { todos, deleteTodo, editTodo } = useTodo();
  const inpRef = useRef();

  //   console.log(todos);

  const handleDeleteTodo = (id) => {
    deleteTodo(id);
  };

  const handleEditTodo = (id) => {
    // inpRef.current.focus();
    editTodo(id);
  };

  const handleDate = (date) => {
    const d = new Date(date);
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let hour = d.getHours();
    let mint = d.getMinutes();
    return `${year}-${month}-${day}: ${hour}:${mint}`;
  };

  return (
    <>
      <div className="container">
        {todos.length > 10 && (
          <h3>
            {" "}
            <span className="text-warning">Warnning </span> Todo is more then 10
          </h3>
        )}
        {todos.length > 0 ? (
          <h3>
            Total no of Todos :{" "}
            <span className="text-primary">{todos.length}</span>
          </h3>
        ) : (
          <h3>No Todos are there !!</h3>
        )}
        <div className="card">
          {todos.map((todo) => (
            <div className="row" key={todo.id}>
              <div className="col-3 bg-secondary d-flex">
                <p>{handleDate(todo.date)}</p>
              </div>
              <div className="col-5 title">
                <h3>{todo.title}</h3>
                {/* <input
                  type="text"
                  value={todoTitle}
                  ref={inpRef}
                  className="form-control"
                  onChange={(e) => setTodoTitle(e.target.value)}
                /> */}
              </div>
              <div className="col-4">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() =>
                    handleEditTodo({
                      id: todo.id,
                      title: todo.title,
                      date: Date.now(),
                    })
                  }
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TodoList;
