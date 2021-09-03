import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      return state + 1;
    }
    case "decrement": {
      return state - 1;
    }
    default:
      return state;
  }
};

const ExampleThree = () => {
  const [state1, dispatch1] = useReducer(reducer, initialState);
  const [state2, dispatch2] = useReducer(reducer, initialState);

  const handleIncrementCount1 = () => {
    dispatch1({
      type: "increment"
    });
  };

  const handleDecrementCount1 = () => {
    dispatch1({
      type: "decrement"
    });
  };
  const handleIncrementCount2 = () => {
    dispatch2({
      type: "increment"
    });
  };
  const hanldeDecrementCount2 = () => {
    dispatch2({
      type: "decrement"
    });
  };

  return (
    <div>
      {state1}
      <br />
      <br />
      <button onClick={handleIncrementCount1}>IncOne</button>
      <button onClick={handleDecrementCount1}>DecOne</button>
      <br />
      <br />
      {state2}
      <br />
      <br />
      <button onClick={handleIncrementCount2}>IncTwo</button>
      <button onClick={hanldeDecrementCount2}>DecTwo</button>
    </div>
  );
};

export default ExampleThree;
