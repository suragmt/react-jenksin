import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./main.scss";
import User from "./features/user/User";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
async function loadData() {
  const data = await new Promise((resolve, reject) => {
    // setTimeout(() => {
      resolve({ name: "surag", age: 27 });
    // }, 2000);
  });
  return { details: data };
}
function ErrorElement() {
  return <div>error in loading</div>;
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <User />,
    loader: loadData,
  },
  {
    path: "/counter",
    element: <Counter />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "user",
        element: <User />,
      },
    ],
  },
]);
function App() {
  return (
    <RouterProvider router={router}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <span>
            <span>Learn </span>
            <a
              className="App-link"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux
            </a>
            <span>, </span>
            <a
              className="App-link"
              href="https://redux-toolkit.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux Toolkit
            </a>
            ,<span> and </span>
            <a
              className="App-link"
              href="https://react-redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Redux
            </a>
          </span>
        </header>
        <User />
      </div>
    </RouterProvider>
  );
}

export default App;
