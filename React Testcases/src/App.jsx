// src/App.jsx
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import PromiseHandler from "./components/PromiseHandler";
import ParentComponent from "./components/RenderingIssue/ParentComponent";
import One from "./components/RenderingIssue/One";
import Two from "./components/RenderingIssue/Two";

const App = () => (
    <Provider store={store}>
        <div>
            <Counter />
            {/* <TodoList /> */}
            {/* <PromiseHandler /> */}
            {/* <ParentComponent /> */}
            {/* <One /> */}
            {/* <Two /> */}
        </div>
    </Provider>
);

export default App;
