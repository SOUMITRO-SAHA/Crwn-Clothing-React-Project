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

<img class = "img" src="https://dmitripavlutin.com/5c33affee33e7c40e73028fb48a8367b/diagram.svg" alt="">

# Basic Understanding of useReducer and How to apply/use this method :

In order to this work remember context is still context (It will be there no mater what).

So, in order to use useReducer in you code we have to create a reducer function.

> What is a reducer function ?
> 
> It is nothing but a normal function which returns an object which we want to store in the current state.

## Basic structure of Reducer Function :

```javascript
const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};
```

Let's study the above function, first we have to pass two parameter: the current_state and an action_object (Here, the first one is state and the other is action.)
Depending on the action object, the reducer function must update the state in an immutable manner, and return the new state.

On the action there are only two possible properties one is `type` and the other one is optional `payload`

`const { type, payload } = action;` Here, we are gonna destructure the action, To get the values.

Now, let's talk about what kind of action do we have, because we know that we have some action that is setCurrentUser.

So, we are gonna set the `currentUser` value to the `payload`.

```js
return {
	currentUser : payload
}
```

Because, as we know the payload is going to store the value that is important for this reducer to know what to update this state value.

And, then what is the `type` in here, Here the `type` is going to define which type of data is going to pass and which one is not. For that we are using switch() statement based upon the `type`.

> We have to keep in mind that here the type is a `string`. So we have to explicitly define the action type into a `string`

```js
export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};
```

Then we are able to use the switch statement inside the reducer function:

```js
switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
```

Now, We are gonna utilize the user reducer function : To utilized it we just have to use `useReducer` hook.

```js
const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
```

This `useReducer` hook just going to take two arguments (New Update it can take 3 arguments, which is totally optional if want to learn more. [Visit Here](https://reactjs.org/docs/hooks-reference.html#usereducer))

the **first argument is the reducer function** and the **second one is the initial_state**. Here we have to specify the initial state.

```js
const INITIAL_STATE = {
  currentUser: null,
};
```

or, we can use like this as well

```js
const [state, dispatch] = useReducer(
   reducer,
   {count: initialCount}
 );
```

## Now, what do we get back from user reducer `useReducer` ?

The first one is the state object. So the current values that's being stored by this reducer.
The Second is a dispatch function.


> useReducer() --> Always gives us two arguments
  the first one is state => Object [so the current values that's being stored by this reducer]
  and , the second one is dispatch => function.
  [This dispatch() function, the way thats work is that whenever you call it, you pass it an action object.
  So, if you want this user reducer to receive an action, you have to call dispatch and dispatch will take that action and then pass it in, where I will then run through the switch statement and update the reducer accordingly. ]

Now, we can define the `setCurrentUser` function which we get from `UserContext`

```js
const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };
```

So in this `setCurrentUser` function we are calling the `dispatch` function to update the state.

Now, we are gonna call the `setCurrentUser` function inside the `useEffect` function/hook. (To learn more about [`useEffect`](./useEffect.md))

```js
useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user); //Creating doc in the db from User data.
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
```

> ### **Here, we are not gonna discuss about useEffect.**

In useEffect you are gonna update Current User status depending upon the `onAuthStateChangedListener` function.

[[Main Code of *User.context*]](../../src/contexts/user.context.jsx)

<link rel="stylesheet" href="../Button.style.css">
