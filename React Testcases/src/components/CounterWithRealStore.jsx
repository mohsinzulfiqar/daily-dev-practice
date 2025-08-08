import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from "../redux/store";
import Counter from "./Counter";

// Mock the Redux hooks
jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));

describe('Counter Component', () => {
    let mockDispatch;

    beforeEach(() => {
        // Reset the mocks before each test
        useSelector.mockClear();
        useDispatch.mockClear();

        // Set up a default mock dispatch
        mockDispatch = jest.fn();
        useDispatch.mockReturnValue(mockDispatch);
    });

    // Positive Tests

    test('renders with the initial count', () => {
        useSelector.mockReturnValue({ counter: { value: 10 } }); // Mock initial state
        render(
            <Provider store={store}>
                <Counter />
            </Provider>
        );
        expect(screen.getByText('Counter: 10')).toBeInTheDocument();
    });

    test('renders with the initial count of 0 if not provided', () => {
        useSelector.mockReturnValue({ counter: { value: 0 } });
        render(<Provider store={store}>
            <Counter />
        </Provider>);
        expect(screen.getByText('Counter: 0')).toBeInTheDocument();
    });

    test('dispatches increment action when increment button is clicked', () => {
        useSelector.mockReturnValue({ counter: { value: 0 } });
        render(<Provider store={store}>
            <Counter />
        </Provider>);
        const incrementButton = screen.getByText('Increment');
        fireEvent.click(incrementButton);
        expect(mockDispatch).toHaveBeenCalledWith({ type: 'counter/increment' });
    });

    test('dispatches decrement action when decrement button is clicked', () => {
        useSelector.mockReturnValue({ counter: { value: 0 } });
        render(<Provider store={store}>
            <Counter />
        </Provider>);
        const decrementButton = screen.getByText('Decrement');
        fireEvent.click(decrementButton);
        expect(mockDispatch).toHaveBeenCalledWith({ type: 'counter/decrement' });
    });

    test('displays incremented count after increment button click', () => {
        useSelector.mockReturnValueOnce({ counter: { value: 5 } }); // Initial render
        useSelector.mockReturnValueOnce({ counter: { value: 6 } }); // After increment
        render(<Provider store={store}>
            <Counter />
        </Provider>);
        expect(screen.getByText('Counter: 5')).toBeInTheDocument();
        const incrementButton = screen.getByText('Increment');
        fireEvent.click(incrementButton);
        expect(screen.getByText('Counter: 6')).toBeInTheDocument();
    });

    test('displays decremented count after decrement button click', () => {
        useSelector.mockReturnValueOnce({ counter: { value: 5 } }); // Initial render
        useSelector.mockReturnValueOnce({ counter: { value: 4 } }); // After decrement
        render(<Provider store={store}>
            <Counter />
        </Provider>);
        expect(screen.getByText('Counter: 5')).toBeInTheDocument();
        const decrementButton = screen.getByText('Decrement');
        fireEvent.click(decrementButton);
        expect(screen.getByText('Counter: 4')).toBeInTheDocument();
    });

    test('displays correct count after multiple increments', () => {
        useSelector.mockReturnValueOnce({ counter: { value: 0 } });
        useSelector.mockReturnValueOnce({ counter: { value: 1 } });
        useSelector.mockReturnValueOnce({ counter: { value: 2 } });
        render(<Provider store={store}>
            <Counter />
        </Provider>);
        expect(screen.getByText('Counter: 0')).toBeInTheDocument();
        const incrementButton = screen.getByText('Increment');
        fireEvent.click(incrementButton);
        expect(screen.getByText('Counter: 1')).toBeInTheDocument();
        fireEvent.click(incrementButton);
        expect(screen.getByText('Counter: 2')).toBeInTheDocument();
    });

    test('displays correct count after multiple decrements', () => {
        useSelector.mockReturnValueOnce({ counter: { value: 5 } });
        useSelector.mockReturnValueOnce({ counter: { value: 4 } });
        useSelector.mockReturnValueOnce({ counter: { value: 3 } });
        render(<Provider store={store}>
            <Counter />
        </Provider>);
        expect(screen.getByText('Counter: 5')).toBeInTheDocument();
        const decrementButton = screen.getByText('Decrement');
        fireEvent.click(decrementButton);
        expect(screen.getByText('Counter: 4')).toBeInTheDocument();
        fireEvent.click(decrementButton);
        expect(screen.getByText('Counter: 3')).toBeInTheDocument();
    });

    test('displays correct count after increment and decrement actions', () => {
        useSelector.mockReturnValueOnce({ counter: { value: 2 } });
        useSelector.mockReturnValueOnce({ counter: { value: 3 } });
        useSelector.mockReturnValueOnce({ counter: { value: 2 } });
        render(<Provider store={store}>
            <Counter />
        </Provider>);
        expect(screen.getByText('Counter: 2')).toBeInTheDocument();
        const incrementButton = screen.getByText('Increment');
        const decrementButton = screen.getByText('Decrement');
        fireEvent.click(incrementButton);
        expect(screen.getByText('Counter: 3')).toBeInTheDocument();
        fireEvent.click(decrementButton);
        expect(screen.getByText('Counter: 2')).toBeInTheDocument();
    });

    test('applies red color to the counter text', () => {
        useSelector.mockReturnValue({ counter: { value: 0 } });
        render(<Provider store={store}>
            <Counter />
        </Provider>);
        const counterHeading = screen.getByText(/Counter:/i);
        expect(counterHeading).toHaveStyle({ color: 'red' });
    });

    // Negative-like Tests

    test('only dispatches increment action when increment button is clicked', () => {
        useSelector.mockReturnValue({ counter: { value: 0 } });
        render(<Provider store={store}>
            <Counter />
        </Provider>);
        const incrementButton = screen.getByText('Increment');
        fireEvent.click(incrementButton);
        expect(mockDispatch).toHaveBeenCalledTimes(1);
        expect(mockDispatch).toHaveBeenCalledWith({ type: 'counter/increment' });
    });

    test('only dispatches decrement action when decrement button is clicked', () => {
        useSelector.mockReturnValue({ counter: { value: 0 } });
        render(<Provider store={store}>
            <Counter />
        </Provider>);
        const decrementButton = screen.getByText('Decrement');
        fireEvent.click(decrementButton);
        expect(mockDispatch).toHaveBeenCalledTimes(1);
        expect(mockDispatch).toHaveBeenCalledWith({ type: 'counter/decrement' });
    });
});