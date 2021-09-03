import React, { useState, useReducer } from "react";

const ACTIONS = {
  ADD_TODO: "add-todo"
};

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO: {
      return [...todos, newTodo(action.payload.name)];
    }
    default:
      return todos;
  }
};

const newTodo = (name) => {
  return {
    id: Date.now(),
    name: name,
    complete: false
  };
};

function TodoList() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: { name: name }
    });
    setName(" ");
  };

  console.log(todos);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
      <TodoList todos={todos} />
    </div>
  );
}

export default TodoList;
