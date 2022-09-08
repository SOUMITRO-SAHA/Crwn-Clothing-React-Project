# CRWN CLOTHING REACT PROJECT (E-commerce Website) :

**Description :**
It is a full fledged E-commerce site.

Live Demo : https://cclothing.netlify.app/

----

# Documentation of All the Topics : -

.
.
.
## React Lifecycle : [Pending...]

# React Hooks :

Hooks were added to React in v 16.8.

Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.

> **Although Hooks generally replace class components, there are no plans to remove classes from React.**


## What is a Hook ?

Hooks allow us to "Hook" into React features such as state and lifecycle methods.

> ### Example :
> Here is an example of a Hook, Don't worry if it doesn't make sense. We will go into more details in this documentation.

```javascript
import React, { useState } from "react";

export default function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button type="button" onClick={() => setColor("blue")}>
        Blue
      </button>
      <button type="button" onClick={() => setColor("red")}>
        Red
      </button>
      <button type="button" onClick={() => setColor("pink")}>
        Pink
      </button>
      <button type="button" onClick={() => setColor("green")}>
        Green
      </button>
    </>
  );
}
```
<button><a href="https://codesandbox.io/s/reacthooks-c6890k" alt="">Run the Code </a></button>

You must `import` Hooks from `react`.

Here we are using `useState` Hooks to keep track of the application state.

State generally refers to application data or properties that need to be track.

---
## Hook Rules :

There are 3 rules for hooks :

- Hooks can only be called inside React function components.
- Hooks can only be called at the top level of a component.
- Hooks cannot be conditional.

> Hooks will not work in React Class Components.

## Custom Hooks :

> If you have state full logic that needs to be reused in several components, you can build you own custom Hooks.
> [[Example]](./Notes/ReactHooks/customHooks.md).

<!-- React UseState Hook -->
# React `useState` Hook :

The React `useState` Hook allows us to track state in a function component.

State generally refers to data or properties that need to be tracking in an application.

[[Read More..]](./Notes/ReactHooks/useState.Hook.md)

<!-- React useEffect Hook -->
# React `useEffect` Hook :

<!-- React useContext Hook -->
# React `useContext` Hook :

> ## React Contexts for State Management :

> Context provides a way to pass data through the component tree without having to pass props down manually at every level.

In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

[[more..]](Notes/ReactHooks/useContext.md)

<!-- React useRef Hook -->
# React `useRef` Hook :

<!-- React useReducer Hook -->
# React `useReducer` Hook :

The `useReducer` Hook is similar to the `useState` Hook.

It allows for custom state logic.

If you find yourself keeping track of multiple pieces of state that rely on complex logic, `useReducer` may be useful.

[[Read more...]](./Notes/ReactHooks/useReducer.md)

<!-- React useCallback Hook -->
# React `useCallback` Hook :

<!-- React useMemo Hook -->
# React `useMemo` Hook :

<!-- React CustomHooks Hook -->
# React `CustomHooks` Hook :

## Uploading the Data to the FireStore :

To Upload data on the FireStore is mainly done on back-end. For, learning propose we are performing this task in here.

[[Learn More...]](Notes/FireBase/uploading_data_on_fireStore.md)



<link rel="stylesheet" href="./Notes/Button.style.css">
