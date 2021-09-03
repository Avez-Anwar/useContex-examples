import React, { useReducer } from "react";
const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement"
};

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.INCREMENT: {
      return { initialState: state.initialState + 1 };
    }
    case ACTION.DECREMENT: {
      return { initialState: state.initialState - 1 };
    }
    default:
      return state;
  }
};

function ExampleUseReducer() {
  const [state, dispatch] = useReducer(reducer, { initialState });

  const incrementHandler = () => {
    dispatch({
      type: ACTION.INCREMENT
    });
  };
  const decrementHandler = () => {
    dispatch({
      type: ACTION.DECREMENT
    });
  };

  return (
    <div>
      <button onClick={decrementHandler}>-</button>
      {state.initialState}
      <button onClick={incrementHandler}>+</button>
    </div>
  );
}

export default ExampleUseReducer;

// import React, { useReducer } from "react";
// const ACTION = {
//   INCREMENT: "increment",
//   DECREMENT: "decrement"
// };

// const initialState = 0;

// const reducer = (state, action) => {
//   switch (action.type) {
//     case ACTION.INCREMENT: {
//       return state + 1;
//     }
//     case ACTION.DECREMENT: {
//       return state - 1;
//     }
//     default:
//       return state;
//   }
// };

// function ExampleUseReducer() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const incrementHandler = () => {
//     dispatch({
//       type: ACTION.INCREMENT
//     });
//   };
//   const decrementHandler = () => {
//     dispatch({
//       type: ACTION.DECREMENT
//     });
//   };

//   return (
//     <div>
//       <button onClick={decrementHandler}>-</button>
//       {state}
//       <button onClick={incrementHandler}>+</button>
//     </div>
//   );
// }

// export default ExampleUseReducer;
