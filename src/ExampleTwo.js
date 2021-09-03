import React, { useReducer } from "react";

const initialState = {
  count1: 0,
  count2: 1
};

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  INCREMENTTWO: "incrementTwo",
  DECREMENTTWO: "decrementTwo"
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT: {
      return {
        ...state,
        count1: state.count1 + 1
      };
    }
    case ACTIONS.DECREMENT: {
      return {
        ...state,
        count1: state.count1 - 1
      };
    }
    case ACTIONS.INCREMENTTWO: {
      return {
        ...state,
        count2: state.count2 + 1
      };
    }
    case ACTIONS.INDECREMENTTWO: {
      return {
        ...state,
        count2: state.count2 - 1
      };
    }

    default:
      return state;
  }
};

const ExampleTwo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({
      type: ACTIONS.INCREMENT
    });
  };

  const handleDecrement = () => {
    dispatch({
      type: ACTIONS.DECREMENT
    });
  };

  const handleIncrementTwo = () => {
    dispatch({
      type: ACTIONS.INCREMENTTWO
    });
  };

  const handleDecrementTwo = () => {
    dispatch({
      type: ACTIONS.INDECREMENTTWO
    });
  };

  return (
    <div>
      {state.count1}
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <br />
      <br />
      {state.count2}
      <button onClick={handleIncrementTwo}>IncrementTwo</button>
      <button onClick={handleDecrementTwo}>DecrementTwo</button>
    </div>
  );
};
export default ExampleTwo;
