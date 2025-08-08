// src/components/TodoList.jsx
import { useState } from "react";
import React from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const addTodo = () => {
        if (input) {
            setTodos([...todos, input]);
            setInput("");
        }
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={addTodo}>Add Todo</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
