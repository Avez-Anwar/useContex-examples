import React, { useReducer } from "react";

const initalState = 0;

const reducer = (state, action) => {
  switch (action) {
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

function ExampleOne() {
  const [count, dispatch] = useReducer(reducer, initalState);
  return (
    <div>
      {count}
      <button onClick={() => dispatch("increment")}>+</button>
      <button onClick={() => dispatch("decrement")}>-</button>
    </div>
  );
}

export default ExampleOne;

// import React, { useReducer } from "react";

// const initialState = 0;

// const reducer = (state, action) => {
//   switch (action) {
//     case "increment": {
//       return state + 1;
//     }
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return 0;
//     default:
//       throw new Error("Unexpected action");
//   }
// };

// const Example01 = () => {
//   const [count, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       {count}
//       <br />
//       <br />
//       <button onClick={() => dispatch("increment")}>+1</button>
//       <button onClick={() => dispatch("decrement")}>-1</button>
//       <button onClick={() => dispatch("reset")}>reset</button>
//     </div>
//   );
// };

// export default Example01;
