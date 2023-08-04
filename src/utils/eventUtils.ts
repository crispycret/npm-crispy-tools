/**
 * eventUtils.ts
 * 
 * This file contains utility functions related to event handling in JavaScript/TypeScript. It provides
 * helper functions to work with events and event listeners for DOM elements.
 * 
 * List of functions:
 * - debounce(callback, delay, immediate?): Returns a debounced version of the provided callback function,
 *   which will be executed after a specified delay, preventing rapid and excessive invocation. The optional
 *   "immediate" parameter allows immediate execution of the callback on the first invocation.
 * 
 * - throttle(callback, delay): Returns a throttled version of the provided callback function, which ensures
 *   that the callback is executed at most once within the given delay duration. It prevents excessive
 *   processing or rendering triggered by fast and repetitive events.
 * 
 * These functions are designed to optimize event handling and improve performance in scenarios where events
 * can be triggered rapidly or frequently. They are particularly useful for scenarios like resizing the window
 * or handling search input, where you want to limit the frequency of callbacks without losing responsiveness.
 * 
 * Note: This file can be used independently or combined with other utility modules in a JavaScript/TypeScript
 * project to enhance event handling capabilities and improve user experience.
 */



/**
 * A function that will execute the callback at most once every `delay` milliseconds.
 * 
 * Debounce function.
 * immediately calls the function if immediate is true. 
 * This is useful for search bars where you want to call the function immediately but only after the user has stopped typing.
 * @param {func} callback - function to be called
 * @param {number} delay - delay in milliseconds
 * @param {boolean} immediate - if true, the function is called immediately
 * @returns {func} - debounced function 
 * @example
 * 
 * function handleSearch() {
 *  console.log(search);
 * }
 * 
 * const debouncedSearch = debounce(handleSearch, 500, true);
 * 
 * <input type="text" onChange={(e) => debouncedSearch(e.target.value)} />
 * 
 * 
 * Another Example is for scrolling:
 * 
 * const handleScroll = () => {
 * console.log('scrolling');
 * };
 * 
 * const debouncedScroll = debounce(handleScroll, 500);
 * 
 * window.addEventListener('scroll', debouncedScroll);
 * 
 * or
 * 
 * <div onScroll={e => {
    * setScrollPosition(e.target.scrollTop);
    * debouncedScroll();
 * }} />
 * 
 */ 
export const debounce = (callback: (...args: any[]) => void, delay: number, immediate?: boolean) => {
    let timeout: NodeJS.Timeout | undefined;

    // return a function that will execute the callback at most once every `delay` milliseconds
    return function (...args: any[]) {

        // execute the callback if the timeout is undefined
        const executeCallback = () => {
            callback(...args);
            timeout = undefined;
        };
    
        clearTimeout(timeout); // clear the timeout
    
        // if immediate is true and timeout is undefined, execute the callback
        if (immediate && !timeout) {
            executeCallback();
        }
    
        // schedule a timeout to execute the callback after the delay
        timeout = setTimeout(executeCallback, delay);
    };
};
  



/**
 * A throttle function that will execute the callback at most once every `delay` milliseconds.
 * This is useful for scroll events where you want to call the function only after the user has stopped scrolling.
 * @param {func} callback - function to be called
 * @param {number} delay - delay in milliseconds
 * @returns {func} - throttled function
 * @example
 * 
 * const handleScroll = () => {
 *  console.log('scrolling');
 * };
 * 
 * const throttledScroll = throttle(handleScroll, 500);
 * 
 * window.addEventListener('scroll', throttledScroll);
 * 
 * or
 *  
 * <div onScroll={e => {
*   setScrollPosition(e.target.scrollTop);
*   throttledScroll();
 * }} />
 * 
 */
export const throttle = (callback: (...args: any[]) => void, delay: number) => {
    let lastExecutionTime = 0; // the last time the callback was executed
    let timeout: NodeJS.Timeout; // the timeout instance
  
    // return a function that will execute the callback at most once every `delay` milliseconds
    return function (...args: any[]) {
        const currentTime = Date.now(); // the current time
        const timeSinceLastExecution = currentTime - lastExecutionTime; // the time since the last execution
    
        // execute the callback if the time since the last execution is greater than the delay
        const executeCallback = () => {
            lastExecutionTime = Date.now();
            callback(...args);
        };
    
        clearTimeout(timeout); // clear the timeout
    
        // if the time since the last execution is greater than the delay, then execute the callback
        if (timeSinceLastExecution >= delay) {
            executeCallback();
        } else { // otherwise, 
            // schedule a timeout to execute the callback after the delay
            timeout = setTimeout(executeCallback, delay - timeSinceLastExecution); 
        }
    };
  };
  



/**
 * Extra notes:
 * 
 * In the context of the provided code snippet, the "debounce" and "throttle" functions refer to two different techniques used to control the frequency of event callbacks, especially for events that can trigger rapidly (like the resize event in this case).
 * 
 * Debounce Function:
 * A debounce function is used to delay the execution of a callback function until after a certain amount of time has passed since the last time the event was triggered. It is helpful when you want to handle events that fire rapidly, such as the resize event, but you only want to perform the associated action once a specific time has elapsed since the last event.
 * 
 * For example, if you debounce the resize event with a time of 200 milliseconds, the event listener will only execute the callback after the user stops resizing the window for at least 200 milliseconds.
 * 
 * Throttle Function:
 * A throttle function is used to limit the number of times a callback function is executed within a specific time interval. It prevents the callback from being invoked too frequently, even if the event is triggered rapidly. Unlike debounce, throttle guarantees that the callback will be executed at a regular interval.
 * 
 * For example, if you throttle the resize event with a time interval of 200 milliseconds, the event listener will execute the callback at most once every 200 milliseconds, regardless of how many times the event is triggered within that time frame.
 * 
 * Both debounce and throttle functions are helpful for performance optimization and preventing excessive processing or rendering triggered by fast and repetitive events.
 */
