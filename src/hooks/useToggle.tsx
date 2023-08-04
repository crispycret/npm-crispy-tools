import { useState } from 'react';


/**
 * @summary A hook that toggles between two states.
 * @param {boolean} initialState - The initial state.
 * @returns {array} An array containing the current state and a function to toggle the state.
 * @example
 * const [windowOpen, toggleWindow] = useToggle()
 * const onClick = () => { toggleWindow() }
 * return (
 *  <div>
 *     <button onClick={onClick}>Click me</button>
 *    {windowOpen && <Window />}
 *  </div>
 * )
 */ 
export const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const toggle = () => setState((prevState: boolean) => !prevState);
  return [state, toggle];
};

export default useToggle;
