import { useState, useEffect } from 'react';


/**
 * @summary A hook that counts down from a given number of seconds and runs a callback function when the timer reaches 0.
 * @param {number} defaultWaitSeconds - The number of seconds to count down from.
 * @returns {object} An object containing the remaining time, a function to start the timer, a function to cancel the timer, and a function to format the remaining time.
 * @example
 * 
 * export const HookExample = () => {
 *  const { remainingTime, startTimer, cancelTimer, formatTime } = useCountdownTimer(5)
 *  
 *  const navigateToHome = () => {
 *   history.push('/')
 *  }
 *  
 *  const onClick = () => {
 *   startTimer(5, navigateToHome)
 *  }
 *  
 *  return (
 *   <div>
 *       <button onClick={onClick}>Click me</button>
 *       <p>Remaining time: {formatTime(remainingTime)}</p>
 *   </div>
 *  )
 * }
 * 
 * 
 * Heres how to use cancelTimer:
 * 
 * export const HookExample = () => {
 *  const { remainingTime, startTimer, cancelTimer, formatTime } = useCountdownTimer(5)
 *  
 *  const navigateToHome = () => {
 *      history.push('/')
 *  }
 *  
 *  const onClick = () => {
 *      startTimer(5, navigateToHome)
 *  }
 *  
 *  const onCancelClick = () => {
 *      cancelTimer(navigateToHome)
 *  }
 *  
 *  return (
 *  <div>
 *       <button onClick={onClick}>Click me</button>
 *       <button onClick={onCancelClick}>Cancel</button>
 *       <p>Remaining time: {formatTime(remainingTime)}</p>
 *  </div>
 *  )
 * }
 * 
 */
const useCountdownTimer = (defaultWaitSeconds=5) => {

    // remainingTime is updated every second by the setInterval() function
    const [remainingTime, setRemainingTime] = useState(defaultWaitSeconds * 1000); // 10000 milliseconds = 10 seconds

    // setIntervalId is used to stop the interval when the timer reaches 0
    const [intervalId, setIntervalId] = useState<any>(null); 

    /**
     * @description Starts the timer and runs a callback function when the timer reaches 0.
     * @param {number} seconds - The number of seconds to count down from.
     * @param {function} doAfter - The callback function to run when the timer reaches 0.
     */
    const startTimer = (seconds: number, doAfter=()=>{}) => {
        
        setRemainingTime(seconds * 1000) // set the remaining time to n seconds 

        // The setInterval() function is used to run a function repeatedly after a certain interval of time.
        // In this case, the setInterval() function is used to update the remainingTime every second.
        // After the remainingTime reaches 0, the setInterval() function is stopped and the callback function, doAfter(), is called.
        const __intervalId = setInterval(() => {
            setRemainingTime(prevRemainingTime => {
                const updatedTime = prevRemainingTime - 1000;
                if (updatedTime <= 0) {
                    clearInterval(__intervalId); // Stop the interval when remainingTime reaches 0
                    setTimeout(() => {
                        doAfter && doAfter() // Run the callback function if it exists 1 second after the timer reaches 0
                    }, 800);
                    return 0; // Set the remainingTime to 0 when it reaches 0
                }
                return updatedTime;
            });

        setIntervalId(__intervalId); // Save the intervalId to the state so it can be accessed later
        }, 1000); //
    }


    /**
     * @description Cancels the timer and runs a callback function. By default, the callback function does nothing. 
     * Usefull for when the user navigates away from the page before the timer reaches 0.
     * 
     * @param {function} newDoAfter - The callback function to run after the timer is cancelled.
     */
    const cancelTimer = (newDoAfter=()=>{}) => {
        clearInterval(intervalId) // Stop the interval
        setTimeout(() => {
            newDoAfter && newDoAfter() // Run the callback function if it exists
        }, 800);
    }

    // Function to convert milliseconds to seconds
    /**
     * @description Converts milliseconds to seconds. Used to format the remaining time to display to the user. 
     * @param {number} ms - The number of milliseconds to convert to seconds.
     * @returns {string} The number of seconds.
     */
    const formatTime = (ms: any) => {
        return (ms / 1000).toFixed(0);
    };

    return {
        startTimer,
        cancelTimer,
        remainingTime,
        formatTime
    }

};

export default useCountdownTimer;
