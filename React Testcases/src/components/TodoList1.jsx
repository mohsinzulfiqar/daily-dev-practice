import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

test("adds and displays a todo item", () => {
    render(<TodoList />);

    const input = screen.getByRole("textbox");
    const button = screen.getByText("Add Todo");

    fireEvent.change(input, { target: { value: "Test Todo" } });
    fireEvent.click(button);

    expect(screen.getByText("Test Todo")).toBeInTheDocument();
});
