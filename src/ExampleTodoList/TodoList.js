import React from "react";

function TodoList(props) {
  return (
    <div>
      {props.todos.map((todo) => {
        return <li key={todo.id}>{todo.name}</li>;
      })}
    </div>
  );
}

export default TodoList;
