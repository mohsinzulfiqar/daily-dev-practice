import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from './Counter';

// Mock react-redux hooks
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Counter Component', () => {
  let mockDispatch;

  beforeEach(() => {
    jest.clearAllMocks();
    mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);
  });

  const renderCounter = () => render(<Counter />);

  test('renders with the initial count', () => {
    // useSelector.mockImplementation((selector) => {
    //   const state = { counter: { value: 10 } };
    //   const result = selector(state);
    //   console.log('Selector returned:', result);
    //   return result;
    // });
    // const mockState = 10;
    // useSelector.mockReturnValue(mockState);
    useSelector.mockReturnValue({ counter: { value: 10 } });
    // console.log('Returned value:', mockState);
    renderCounter();
    expect(screen.getByText('Counter: 10')).toBeInTheDocument();
    // fireEvent.click(screen.getByText('Increment'));
    // expect(mockDispatch).toHaveBeenCalledWith({ type: 'counter/increment', payload: 5 });
    // expect(mockDispatch).toHaveBeenCalledTimes(1);
    // console.log(mockDispatch.mock.calls[0][0]);
  });

  test('increments and unmounts', () => {
    const { unmount } = render(<Counter />);
    fireEvent.click(screen.getByText('Increment'));
    expect(screen.getByText('Counter: 10')).toBeInTheDocument();
    unmount(); // Cleanup manually
    // expect(screen.getByText(/Counter: 10/)).toBeInTheDocument();


    // You can check teardown effect here if needed
  });
})

//   test('renders with initial count of 0 if not provided', () => {
//     useSelector.mockReturnValue({ counter: { value: 0 } });
//     renderCounter();
//     expect(screen.getByText('Counter: 0')).toBeInTheDocument();
//   });

//   test('dispatches increment action when increment button is clicked', () => {
//     useSelector.mockReturnValue({ counter: { value: 0 } });
//     renderCounter();
//     fireEvent.click(screen.getByText('Increment'));
//     expect(mockDispatch).toHaveBeenCalledWith({ type: 'counter/increment' });
//   });

//   test('dispatches decrement action when decrement button is clicked', () => {
//     useSelector.mockReturnValue({ counter: { value: 0 } });
//     renderCounter();
//     fireEvent.click(screen.getByText('Decrement'));
//     expect(mockDispatch).toHaveBeenCalledWith({ type: 'counter/decrement' });
//   });

//   test('applies red color to the counter text', () => {
//     useSelector.mockReturnValue({ counter: { value: 0 } });
//     renderCounter();
//     expect(screen.getByText(/Counter:/i)).toHaveStyle({ color: 'red' });
//   });

//   test('only dispatches increment once per click', () => {
//     useSelector.mockReturnValue({ counter: { value: 0 } });
//     renderCounter();
//     fireEvent.click(screen.getByText('Increment'));
//     expect(mockDispatch).toHaveBeenCalledTimes(1);
//   });

//   test('only dispatches decrement once per click', () => {
//     useSelector.mockReturnValue({ counter: { value: 0 } });
//     renderCounter();
//     fireEvent.click(screen.getByText('Decrement'));
//     expect(mockDispatch).toHaveBeenCalledTimes(1);
//   });

//   // Note: These tests simulate count changes with re-renders,
//   // but since Redux state isn’t really updating, they're a bit artificial
//   test('simulates incremented count after dispatch', () => {
//     useSelector
//       .mockReturnValueOnce({ counter: { value: 5 } }) // initial render
//       .mockReturnValueOnce({ counter: { value: 6 } }); // after increment

//     renderCounter();
//     expect(screen.getByText('Counter: 5')).toBeInTheDocument();

//     fireEvent.click(screen.getByText('Increment'));
//     renderCounter(); // re-render to simulate new state
//     expect(screen.getByText('Counter: 6')).toBeInTheDocument();
//   });

//   test('simulates decremented count after dispatch', () => {
//     useSelector
//       .mockReturnValueOnce({ counter: { value: 5 } }) // initial render
//       .mockReturnValueOnce({ counter: { value: 4 } }); // after decrement

//     renderCounter();
//     expect(screen.getByText('Counter: 5')).toBeInTheDocument();

//     fireEvent.click(screen.getByText('Decrement'));
//     renderCounter(); // re-render to simulate new state
//     expect(screen.getByText('Counter: 4')).toBeInTheDocument();
//   });
// });
