import { useEffect, useState } from "react";
import { debounce } from "../utils/eventUtils";


/**
 * @summary A hook that detects if the user is on a mobile device. Used to conditionally render components based on the user's device.
 * @returns {object} An object containing a boolean value indicating if the user is on a mobile device.
 *
 * @todo Find a better way to detect if the user is on a mobile device. Use the user agent string? the system.ts file has a function that does this.
 * @todo Add another field to the returned object that indicates if the user is on a tablet device.
 * @todo Add another field to the returned object that indicates the orientation of the device. (portrait or landscape)  
 */ 
export const useMobile = (maxMobileWidth=988) => {

    // const maxMobileWidth = 768;
    // const maxMobileWidth = 988;
    
    const [mobile, setMobile] = useState(false);
    const [isPortrait, setIsPortrait] = useState(window.innerWidth < window.innerHeight);

    /**
     * @description When this component mounts, add an event listener for orientation change and update the isPortrait and isLandscape states accordingly.
     */
    useEffect(() => {
        const handleOrientationChange = () => {
            setIsPortrait(window.innerWidth < window.innerHeight);
        };
        window.addEventListener('orientationchange', handleOrientationChange);
        return () => window.removeEventListener('orientationchange', handleOrientationChange);
    }, []);

    /**
     * @description When this component mounts, add an event listener for resize and update the mobile state accordingly.
     * The debounce function is used to prevent the event listener from firing too frequently.
     */ 
    useEffect(() => {
        const handleResize = () => {
            setMobile(window.innerWidth <= maxMobileWidth);
        }
        const debouncedHandleResize = debounce(handleResize, 200);
        window.addEventListener('resize', debouncedHandleResize);
        return () => window.removeEventListener('resize', debouncedHandleResize);
    }, [])

    return {
        mobile,
        isPortrait,
    };

}


export default useMobile;




/**
 * Extra notes:
 * 
 * In the context of the provided code snippet, the "debounce" and "throttle" functions refer to two different techniques used to control 
 * the frequency of event callbacks, especially for events that can trigger rapidly (like the resize event in this case).
 * 
 * Debounce Function:
 * A debounce function is used to delay the execution of a callback function until after a certain amount of time has passed since the 
 * last time the event was triggered. It is helpful when you want to handle events that fire rapidly, such as the resize event, 
 * but you only want to perform the associated action once a specific time has elapsed since the last event.
 * 
 * For example, if you debounce the resize event with a time of 200 milliseconds, the event listener will only execute the callback after 
 * the user stops resizing the window for at least 200 milliseconds.
 * 
 * Throttle Function:
 * A throttle function is used to limit the number of times a callback function is executed within a specific time interval. 
 * It prevents the callback from being invoked too frequently, even if the event is triggered rapidly. 
 * Unlike debounce, throttle guarantees that the callback will be executed at a regular interval.
 * 
 * For example, if you throttle the resize event with a time interval of 200 milliseconds, the event listener will execute the callback
 * at most once every 200 milliseconds, regardless of how many times the event is triggered within that time frame.
 * 
 * Both debounce and throttle functions are helpful for performance optimization and preventing excessive processing or rendering 
 * triggered by fast and repetitive events.
 */
