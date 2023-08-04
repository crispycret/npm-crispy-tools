# My Custom Toolset Library for Node (crispy-tools)

This library provides a set of utility functions and custom hooks that can be used in React projects. It includes various tools for handling events, managing document titles, detecting device type, and more.

## Files Summary

### `useTitle.tsx`

A custom hook that updates the document title when the component mounts and resets the document title when the component unmounts. It takes a `title` parameter and sets the document title to the provided value. This hook is useful for dynamically updating the page title based on the component being rendered.

### `useToggle.tsx`

A custom hook that toggles between two states. It returns an array containing the current state and a function to toggle the state. This hook is useful for creating toggles in components, where a user action can switch between two states.

### `usePosition.tsx`

A custom hook that detects if the user has scrolled to the top or bottom of the page. It returns an object containing boolean values for whether the user is at the top or bottom of the page. This hook is useful for creating components that need to respond to scrolling behavior.

### `usePage.tsx`

A custom hook that detects the current page's path based on a predefined list of page routes. It returns an object containing information about the current page, such as the path and index in the `pageRoutes` array. This hook is helpful for handling page-specific logic and navigation in multi-page applications.

### `useMobile.tsx`

A custom hook that detects if the user is on a mobile device. It returns an object containing a boolean value indicating whether the user is on a mobile device and an additional field indicating if the device is in portrait orientation. This hook is useful for conditionally rendering components based on the user's device.

### `useCountdownTimer.tsx`

A custom hook that counts down from a given number of seconds and runs a callback function when the timer reaches 0. It provides functions to start the timer, cancel the timer, and format the remaining time. This hook is useful for implementing countdowns or timed actions in components.

### `eventUtils.ts`

A utility module that contains helper functions related to event handling. It includes `debounce` and `throttle` functions, which are used to control the frequency of event callbacks. These functions can be helpful for performance optimization when dealing with rapidly triggered events.

### `clientInfo.ts`

A utility module that provides functions to retrieve client-related information, such as browser details, device type, operating system, viewport size, and more. These functions utilize browser and navigator APIs to extract relevant information about the user's client, making it useful for analytics and user experience customization in web applications.

## How to Use

To use this library in your React projects, follow these steps:

1. Install the library using npm or yarn:

```bash
npm install crispy-tools
# or
yarn add crispy-tools
```

2. Import the desired utility functions or hooks from the library into your project files:

```javascript

import { useTitle, useToggle, usePosition, usePage, useMobile, useCountdownTimer } from 'crispy-tools';
```

3. Use the imported functions and hooks in your components as needed:

```javascript

import React from 'react';
import { useToggle, useCountdownTimer } from 'crispy-tools';

const ExampleComponent = () => {

    useTitle('Page Title for Component')

    const { mobile, isPortrait } = useMobile();
    const [windowOpen, toggleWindow] = useToggle();
    const { remainingTime, startTimer, cancelTimer, formatTime } = useCountdownTimer();

    const onClick = () => {
        toggleWindow();
        startTimer(10, () => console.log('Timer is done!'));
    };

    const onCancelClick = () => {
        cancelTimer();
    };

    return (
        <div>
            <button onClick={onClick}>Toggle Window</button>
            <button onClick={onCancelClick}>Cancel Timer</button>
            <p>Remaining Time: {formatTime(remainingTime)}</p>
            {windowOpen && <div>Window Content</div>}
            {mobile && <div>Mobile Only Content</div>}
        </div>
    );
};

export default ExampleComponent;
```

Please note that these examples are simplified for demonstration purposes, and you may need to adapt them to your specific use cases. Additionally, you can refer to the JSDoc comments in the individual files for more detailed information on each function or hook's usage and parameters.