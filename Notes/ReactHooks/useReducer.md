# React `useReducer` Hook :

The `useReducer` Hook is similar to the `useState` Hook.
It allows for custom state logic.
It you find yourself keeping track of multiple pieces of state that rely on complex logic, `useReducer` may be useful.

The `useReducer` Hook is the better alternative to the `useState` hook and is generally more preferred over the `useState` hook when you have complex state-building logic or when the next state value depends upon its previous value or when the components are needed to be optimized.

## **Syntax :**

The useReducer Hook accepts two arguments.

```bash
useReducer(<reducer>, <initialState>)
```

The `reducer` function contains your custom state logic and the `initialState` can be a simple value but generally will contain an object.

The `useReducer` Hook returns the current `state` and a `dispatch` method.

Here is an example of `useReducer` in a counter app :

```javascript
import React, { useReducer } from "react";

// Defining the initial state and the reducer
const initialState = 0;
const reducer = (state, action) => {
switch (action) {
	case "add":
	return state + 1;
	case "subtract":
	return state - 1;
	case "reset":
	return 0;
	default:
	throw new Error("Unexpected action");
}
};

const App = () => {
	// Initialising useReducer hook
const [count, dispatch] = useReducer(reducer, initialState);
return (
	<div>
	<h2>{count}</h2>
	<button onClick={() => dispatch("add")}>
		add
	</button>
	<button onClick={() => dispatch("subtract")}>
		subtract
	</button>
	<button onClick={() => dispatch("reset")}>
		reset
	</button>
	</div>
);
};

export default App;

```
<button><a href="https://codesandbox.io/s/reacthooks-c6890k?file=/src/ReactHooks/06-useReducer_Hooks.jsx">Run the Code</a></button>

> This is just the logic to keep track of the todo complete status.
> 
> All of the logic to add, delete, and complete a todo could be contained within a single `useReducer` Hook by adding more actions.

<link rel="stylesheet" href="../Button.style.css">
